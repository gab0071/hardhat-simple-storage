// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

const { task } = require("hardhat/config")

task("block-number", "Prints the current block number").setAction(
    // const blockTask = async function() => {}
    // async function blockTask() {}
    async (taskArgs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Current block number: ${blockNumber}`)
    }
)

module.exports = {}
