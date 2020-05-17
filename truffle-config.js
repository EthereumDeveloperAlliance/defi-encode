require("dotenv").config();

const HDWalletProvider = require("truffle-hdwallet-provider");

if (!process.env.INFURA_APIKEY) {
  throw new Error("Infura API key is required.");
}

if (!process.env.TESTNET_PRIVATE_KEY && !process.env.MAINNET_PRIVATE_KEY) {
  throw new Error("Please define PRIVATE_KEY in .env first!");
}

module.exports = {
  networks: {
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          process.env.TESTNET_PRIVATE_KEY,
          `https://rinkeby.infura.io/v3/${process.env.INFURA_APIKEY}`
        ),
      network_id: "4",
    },
    kovan: {
      provider: () =>
        new HDWalletProvider(
          process.env.TESTNET_PRIVATE_KEY,
          `https://kovan.infura.io/v3/${process.env.INFURA_APIKEY}`
        ),
      network_id: "42",
    },
    goerli: {
      provider: () =>
        new HDWalletProvider(
          process.env.TESTNET_PRIVATE_KEY,
          `https://goerli.infura.io/v3/${process.env.INFURA_APIKEY}`
        ),
      network_id: "5",
    },
    mainnet: {
      provider: () =>
        new HDWalletProvider(
          process.env.MAINNET_PRIVATE_KEY,
          `https://mainnet.infura.io/v3/${process.env.INFURA_APIKEY}`
        ),
      network_id: "0",
    },
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*",
      // gas: 990000,
      // gasPrice: 1000000000
    },
    coverage: {
      host: "localhost",
      port: 8555,
      network_id: "*",
      gas: 8000000,
      gasPrice: 16000000000, // web3.eth.gasPrice
    },
  },
  compilers: {
    solc: {
      version: "0.5.15",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
  mocha: {
    // https://github.com/cgewecke/eth-gas-reporter
    reporter: "eth-gas-reporter",
    reporterOptions: {
      currency: "USD",
      gasPrice: 10,
      onlyCalledMethods: true,
      showTimeSpent: true,
      excludeContracts: ["Migrations"],
    },
  },
};
