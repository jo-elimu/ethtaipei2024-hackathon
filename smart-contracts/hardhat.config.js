require("@nomicfoundation/hardhat-toolbox");

require('dotenv').config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    optimism_sepolia: { // deployed with remix, checked with remix, https://sepolia-optimism.etherscan.io/address/0xBc99e3B4ef2c923150E9b2eDe9B5a1c569c83BB0, testnet data added
      url: "https://opt-sepolia.g.alchemy.com/v2/zEzHSmTu1FlFSvd4P_Yzb21XaZBilczk",
      accounts: [PRIVATE_KEY],
      chainId: 11155420,
    },
    polygon_cardona: { // deployed with remix, checked with remix, https://cardona-zkevm.polygonscan.com/address/0x43A30DB2d6962c37a702E869FbD15cFc4f86f621, testnet data added
        url: "https://polygonzkevm-cardona.g.alchemy.com/v2/iGQ3hCKslg45YnwfZhP37RQXiixTz_2g",
        accounts: [PRIVATE_KEY],
        chainId: 2442,
    },
    scroll_sepolia: { // deployed with remix, checked with remix, https://sepolia.scrollscan.dev/address/0x43A30DB2d6962c37a702E869FbD15cFc4f86f621, testnet data added
        url: "...",
        accounts: [PRIVATE_KEY],
        chainId: 534351,
    },
    linea_goerli: { // deployed with remix, checked with remix, https://goerli.lineascan.build/address/0x8a128f1ff1b046ff681e560ca0cce43535be8d49, testnet data added
        url: "...",
        accounts: [PRIVATE_KEY],
        chainId: 59140,
    },
    thundercore_testnet: { // deployed with remix, checked with remix, https://explorer-testnet.thundercore.com/address/0x3FBfA1a0F44dB25f55c4370156227dDb2576f48E
        url: "...",
        accounts: [PRIVATE_KEY],
        chainId: 108,
    }
  },
};
