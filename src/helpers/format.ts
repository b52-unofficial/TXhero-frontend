export function formatETH(eth: number, decimals = 6) {
  return Math.floor(eth * 10 ** decimals) / 10 ** decimals;
}
