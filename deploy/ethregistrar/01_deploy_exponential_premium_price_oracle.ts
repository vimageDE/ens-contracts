import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { getNamedAccounts, deployments, network } = hre
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  let oracleAddress = '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419'
  let feeAddress = ''
  if (network.name !== 'mainnet') {
    const dummyOracle = await deploy('DummyOracle', {
      from: deployer,
      args: ['160000000000'],
      log: true,
    })
    oracleAddress = dummyOracle.address
    const dummyFee = await deploy('MockFeeContract', {
      from: deployer,
      args: ['1000000000000000'],
      log: true,
    })
    feeAddress = dummyFee.address
  }

  await deploy('ExponentialPremiumPriceOracle', {
    from: deployer,
    args: [
      oracleAddress,
      [0, 0, '20294266869609', '5073566717402', '158548959919'],
      '100000000000000000000000000',
      21,
      feeAddress,
    ],
    log: true,
  })
}

func.id = 'price-oracle'
func.tags = ['ethregistrar', 'ExponentialPremiumPriceOracle', 'DummyOracle']
func.dependencies = ['registry']

export default func
