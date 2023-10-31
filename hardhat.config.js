require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */

const ALCHEMY_KEY_URL=process.env.ALCHEMY_KEY_URL;
const SEPOLIA_PRIVATE_KEY=process.env.SEPOLIA_PRIVATE_KEY;
module.exports = {
  solidity: "0.8.17",
  networks:{
    sepolia:{
      url:ALCHEMY_KEY_URL,
      accounts:[SEPOLIA_PRIVATE_KEY],
    },
  },
};
