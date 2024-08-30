import { HardhatUserConfig } from "hardhat/types";
import "@nomicfoundation/hardhat-ethers";
import "@nomiclabs/hardhat-vyper";
import "hardhat-deploy";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  defaultNetwork: "fluent_devnet1",
  networks: {
    fluent_devnet1: {
      url: 'https://rpc.dev.thefluent.xyz/',
      chainId: 20993,
      accounts: [`0x${process.env.DEPLOYER_PRIVATE_KEY}`],
    },
  },
  solidity: {
    version: '0.8.19',
  },
  vyper: {
    version: "0.3.0",
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};

export default config;
