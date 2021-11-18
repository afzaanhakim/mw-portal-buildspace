const main = async () => {

  const waveContractFactory = await hre.ethers.getContractFactory('WavePortal'); //compile the contract and generate the necessary files we need to work with the contract under the artifacts directory

  const waveContract = await waveContractFactory.deploy();
  //Hardhat will create a local ethereum network for the contract and after the script is complete, destroys the network

  await waveContract.deployed();
  // wait until contract is deployed on the temporary local blockchain

  console.log("Contract deployed to:", waveContract.address);
}

//running async process of invoking main function to deploy on local blockchain
const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();