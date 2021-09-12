const path = require("path");

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/abis"),

  networks: {
    // add network here
    // rinkeby, kovan, mainnet fork etc
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: ">=0.7.0 <0.9.0",
    }
  },
};
