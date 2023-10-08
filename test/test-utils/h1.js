const { ethers } = require('hardhat')

const EMPTY_ADDRESS = '0x0000000000000000000000000000000000000000'
const EMPTY_BYTES32 =
  '0x0000000000000000000000000000000000000000000000000000000000000000'
const H1NativeApplication_Fee = ethers.utils.parseEther('0.001')

module.exports = {
  EMPTY_ADDRESS,
  EMPTY_BYTES32,
  H1NativeApplication_Fee,
}
