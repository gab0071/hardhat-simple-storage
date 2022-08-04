require("@nomiclabs/hardhat-waffle")
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("./Task/block-number.js")
require("hardhat-gas-reporter")
require("solidity-coverage")

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const KOVAN_RPC_URL = process.env.KOVAN_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        kovan: {
            url: KOVAN_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 42,
        },
        // KOVAN: {
        //     url: KOVAN_RPC_URL,
        //     accounts: [PRIVATE_KEY],
        //     chainId: 4,
        // },
        localhost: {
            url: "http://localhost:8545",
            chainId: 31337,
        },
    },
    solidity: "0.8.8",
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        coinmarketcap: COINMARKETCAP_API_KEY,
        //token: "",
        //Para ver el precio de gas de la blockchin en la que queremos trabajar.
    },
}
