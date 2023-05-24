import { Token } from '@uniswap/sdk-core'
import { FeeAmount } from '../constants'
import { computeZkSyncPoolAddress } from './computeZkSyncPoolAddress'

describe('#computeZKSyncPoolAddress', () => {
  const factoryAddress = '0x72B37018BfD6F78c7c7509Bf77f8D1d4bd206dBD'
  it('should correctly compute the pool address', () => {
    const tokenA = new Token(1, '0x46caA59e33FEb040442CC9722922260cBdDb3F6F', 6, 'USDC', 'USD Coin')
    const tokenB = new Token(1, '0xE6E3854A3dF24043890BB5376DEbFA178C56a011', 18, 'WBTC', 'Wrapped BTC')
    const result = computeZkSyncPoolAddress({
      factoryAddress,
      fee: FeeAmount.LOW,
      tokenA,
      tokenB
    })

    expect(result).toEqual('0xA5C3241d31c63c6D94172B0792eCfF1763C090a8')
  })

  it('should correctly compute the pool address', () => {
    const USDC = new Token(1, '0x46caA59e33FEb040442CC9722922260cBdDb3F6F', 6, 'USDC', 'USD Coin')
    const WBTC = new Token(1, '0xE6E3854A3dF24043890BB5376DEbFA178C56a011', 18, 'WBTC', 'Wrapped BTC')
    let tokenA = USDC
    let tokenB = WBTC
    const resultA = computeZkSyncPoolAddress({
      factoryAddress,
      fee: FeeAmount.LOW,
      tokenA,
      tokenB
    })

    tokenA = WBTC

    tokenB = USDC
    const resultB = computeZkSyncPoolAddress({
      factoryAddress,
      fee: FeeAmount.LOW,
      tokenA,
      tokenB
    })

    expect(resultA).toEqual(resultB)
  })
})
