export const labels = [`05/01`, `05/02`, `05/03`, `05/04`, `05/05`, `05/06`, `05/07`];
export const gasFees = [0.001, 0.002, 0.003, 0.004, 0.005, 0.001, 0.002];
export const elRewards = [0.0001, 0.0002, 0.0003, 0.0004, 0.0005, 0.0002, 0.0003];
export const clElSumArray = gasFees.map((cl, index) => {
  return cl + elRewards[index];
});
