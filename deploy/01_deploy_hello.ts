import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployFunction: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    console.log("Deploying contracts with the account:", deployer);

    const token = await deploy("Hello", {
        from: deployer,
        log: true,
    });

    console.log("Hello contract deployed to:", token.address);
};

export default deployFunction;
deployFunction.tags = ["Hello"];
