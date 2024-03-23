require("@nomicfoundation/hardhat-toolbox");

require('dotenv').config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    optimism_sepolia: {
      url: "https://opt-sepolia.g.alchemy.com/v2/zEzHSmTu1FlFSvd4P_Yzb21XaZBilczk", // Update with your Infura project ID
      accounts: [PRIVATE_KEY],
      chainId: 11155420,
    },
  },
};
