const hre = require("hardhat");

async function main() {
  const donate=await hre.ethers.getContractFactory('Donate');
  const contract=await donate.deploy();
  await contract.deployed();
  console.log('Address of contract: ', contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// 0x63421A4Cb5bFd4D107d8f26261D709f586155C1a