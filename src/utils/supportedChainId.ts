import { SupportedChainId } from 'constants/chains'

/**
 * Returns the input chain ID if chain is supported. If not, return undefined
 * @param chainId a chain ID, which will be returned if it is a supported chain ID
 */
export function supportedChainId(chainId: number | null | undefined): SupportedChainId | undefined {
  if (typeof chainId === 'number' && chainId === SupportedChainId.CORE_TEST) {
    return chainId
  }
  return undefined
}
