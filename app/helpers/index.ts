export const centsToDollars = (cents: number) => {
  const amountInDollars = Math.abs(cents / 100).toFixed(2);

  return cents < 0 ? `-$${amountInDollars}` : `$${amountInDollars}`;
};
