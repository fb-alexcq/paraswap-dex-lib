export const UNISWAPV3_QUOTE_GASLIMIT = 200_000;

export const OBSERVATIONS_ARRAY_SIZE = 65535;

// TODO: Must be optimized. used full range request. But for now use this
export const LOWER_TICK_REQUEST_LIMIT = -2000n;
export const UPPER_TICK_REQUEST_LIMIT = 2000n;

export const UNISWAPV3_SUBGRAPH_URL =
  'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3';

export const UNISWAPV3_EFFICIENCY_FACTOR = 5;

export const ZERO_TICK_INFO = {
  liquidityGross: 0n,
  liquidityNet: 0n,
  tickCumulativeOutside: 0n,
  secondsPerLiquidityOutsideX128: 0n,
  secondsOutside: 0n,
  initialized: false,
};
