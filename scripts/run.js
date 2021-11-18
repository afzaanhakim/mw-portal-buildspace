const main = async () => {
const [owner, randomPerson] = await hre.ethers.getSigners();// wallet address of owner and of a random wallet address that is automatically provided in Hardhat


  const waveContractFactory = await hre.ethers.getContractFactory('WavePortal'); //compile the contract and generate the necessary files we need to work with the contract under the artifacts directory

  const waveContract = await waveContractFactory.deploy();//Hardhat will create a local ethereum network for the contract and after the script is complete, destroys the network

  await waveContract.deployed();// wait until contract is deployed on the temporary local blockchain

  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", owner.address);

  let waveCount;
  waveCount = await waveContract.getTotalWaves();//manually call to grab current total # of waves

  let waveTxn = await waveContract.wave();
  await waveTxn.wait();//attempt a wave 



  waveCount = await waveContract.getTotalWaves();//manually grab new total of waves

  waveTxn = await waveContract.connect(randomPerson).wave();
  //trying random wallet address to get to wave
  waveCount = await waveContract.getTotalWaves();
  //checking if wave updates correctly by calling again
  
}


const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
//running async process of invoking main function to deploy on local blockchain
runMain();