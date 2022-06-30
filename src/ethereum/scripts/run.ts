import { ethers } from "hardhat";
import { Signer, BigNumber } from "ethers";

const main = async () => {
  const [owner, randomPerson] = await ethers.getSigners();
  const waveContractFactory = await ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();
  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", owner.address);

  let waveCount = await waveContract.getTotalWaves() as BigNumber;
  console.log(waveCount)

  let waveTxn = await waveContract.wave();
  await waveTxn.wait(1);

  waveCount = await waveContract.getTotalWaves();
  console.log(waveCount)

  waveTxn = await waveContract.connect(randomPerson).wave();
  let receipt = await waveTxn.wait(1);
  console.log(receipt)

  waveCount = await waveContract.getTotalWaves();
  console.log(waveCount)
};

const runMain = async () => {
  try {
    await main();
    process.exit(0); // exit Node process without error
  } catch (error) {
    console.log(error);
    process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
  }
  // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
};

runMain();
