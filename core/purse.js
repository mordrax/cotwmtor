/*
 * Module for handling purse logic
 */

export const denominations = ['copper', 'silver', 'gold', 'platinum'];
export const denominationsMultiplier = {
  'copper'  : 1,
  'silver'  : 100,
  'gold'    : 10000,
  'platinum': 1000000
};
const purseInCopper = purse => {
  if (!purse)
    return 0;

  return (purse.copper || 0) +
    (purse.silver || 0) * 100 +
    (purse.gold || 0) * 10000 +
    (purse.platinum || 0) * 1000000;
};

/**
 * Given two amounts, gives change
 * @param {number} amount
 * @param {string} denominationsCap - returns up to a certain denomination
 * @returns {{copper, silver, gold, platinum}}
 * @private
 */
const giveChange = (amount, denominationsCap) => {
  switch (denominationsCap) {
    case 'copper':
      return {copper: amount};
    case 'silver':
      return {copper: amount % 100, silver: Math.floor(amount / 100)};
    case 'gold':
      return {
        copper: amount % 100,
        silver: Math.floor(amount / 100) % 100,
        gold  : Math.floor(amount / 10000)
      };
    default:
      return {
        copper  : amount % 100,
        silver  : Math.floor(amount / 100) % 100,
        gold    : Math.floor(amount / 10000) % 100,
        platinum: Math.floor(amount / 1000000)
      };
  }
};

/**
 * Subtracts the purse by amount and return a new object with new amount or null if invalid remaining purse
 *
 * Subtraction takes the smallest denomination first, going upwards.
 * - If the amount in the given denomination is large enough
 *
 * Algorithm is simply to subtract the sum in copper and convert back to denominations, largest first.
 * @param {{copper, silver, gold, platinum}} purse
 * @param {{copper, silver, gold, platinum}} cost
 * @returns {{copper, silver, gold, platinum} || null}
 */
export const subtract = (purse, cost) => {
  const sumPurse = purseInCopper(purse);
  let sumCost = purseInCopper(cost);

  if (sumPurse <= sumCost)
    return null;

  let newPurse = _.extend({}, purse);
  let remainingCost = sumCost;

  // for each denomination, try to pay the cost with only that denomination
  // - if you can't, set the denomination to zero and try with the next higher denomination
  // - once you can, then the denomination is big enough and you get change
  //   Change gives you the highest denomination first, up to the current denomination you paid with
  _.some(denominations, x => {
    let change = denominationsMultiplier[x] * newPurse[x] - remainingCost;
    if (change < 0) {
      remainingCost = -change;
      newPurse[x] = 0;
    } else {
      let changePurse = giveChange(change, x);
      newPurse[x] = 0;
      newPurse = _(newPurse).mapValues((coin, denomination) =>
        coin || 0 + changePurse[denomination] || 0
      ).value();
      return true;
    }
  });

  return newPurse;
};

/**
 *
 * @param {number} copper
 * @param {number} silver
 * @param {number} gold
 * @param {number} platinum
 * @returns {{copper, silver, gold, platinum}}
 */
export const newPurse = (copper = 0, silver = 0, gold = 0, platinum = 0) => {
  return {copper, silver, gold, platinum}
};