require("@nomicfoundation/hardhat-toolbox");

require('dotenv').config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    optimism_sepolia: { // deployed with hardhat, checked with remix, https://sepolia-optimism.etherscan.io/address/0x170c6a09ba96B681f2E16146459d717a3Fd81e75
      url: "https://opt-sepolia.g.alchemy.com/v2/zEzHSmTu1FlFSvd4P_Yzb21XaZBilczk",
      accounts: [PRIVATE_KEY],
      chainId: 11155420,
    },
    polygon_cardona: { // deployed with remix, checked with remix, https://cardona-zkevm.polygonscan.com/address/0x43A30DB2d6962c37a702E869FbD15cFc4f86f621
        url: "https://polygonzkevm-cardona.g.alchemy.com/v2/iGQ3hCKslg45YnwfZhP37RQXiixTz_2g",
        accounts: [PRIVATE_KEY],
        chainId: 2442,
    },
    scroll_sepolia: { // deployed with remix, checked with remix, https://sepolia.scrollscan.dev/address/0x43A30DB2d6962c37a702E869FbD15cFc4f86f621
        url: "...",
        accounts: [PRIVATE_KEY],
        chainId: 534351,
    },
    linea_goerli: { // deployed with remix, checked with remix, https://goerli.lineascan.build/address/0x8a128f1ff1b046ff681e560ca0cce43535be8d49
        url: "...",
        accounts: [PRIVATE_KEY],
        chainId: 59140,
    },
  },
};
