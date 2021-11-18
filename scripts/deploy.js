

const main = async () => {

  const [deployer] = await hre.ethers.getSigners(); //get deployer/owner address
  const accountBalance = await deployer.getBalance();

  console.log("deploying contract with account: ", deployer.address)

  console.log("Account balance ", accountBalance.toString())



  const Token = await hre.ethers.getContractFactory('WavePortal');//compiling waveportal contract 
  const portal = await Token.deploy();
  //hardhat creating local eth network 

  await portal.deployed()
  // wait until contract is deployed on the temporary local blockchain

  console.log('WavePortal address: ', portal.address);
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