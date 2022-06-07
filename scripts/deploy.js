
const deploy = async () => {
  const [deployer] = await ethers.getSigners();

  console.log(`Deploying contract with the account: ${deployer.address}`);

  const PlatziPunks = await ethers.getContractFactory('PlatziPunks');
  const deployed = await PlatziPunks.deploy(10000);

  console.log(`Contract deployed at ${deployed.address}`);
}

const start = async () => {
  try {

    await deploy();

    process.exit(0)
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

start();
