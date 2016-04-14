import * as Purse from '/core/purse.js';

describe('A purse', () => {
  let purse, amount;

  beforeEach(() => {
    purse = Purse.newPurse(1000, 10, 1);
  });

  it('should return the original contents if amount is zero/invalid/greater than purse', () => {
    expect(Purse.subtract(purse, Purse.newPurse())).toEqual(purse, 'Zero amount');
    expect(Purse.subtract(purse, null)).toEqual(purse, 'Null amount');
    expect(Purse.subtract(purse, undefined)).toEqual(purse, 'Undefined amount');
    expect(Purse.subtract(purse, 'hi')).toEqual(purse, 'string amount');
    expect(Purse.subtract(purse, Purse.newPurse(0, 0, 0, 1))).toEqual(null, 'Greater than purse');
  });
  it('should subtract single denominations without remainders', () => {
    amount = Purse.newPurse(500);
    expect(Purse.subtract(purse, amount)).toEqual(Purse.newPurse(500, 10, 1));
  });
  it('should give change', () => {
    purse = Purse.newPurse(0, 5);
    amount = Purse.newPurse(50);
    expect(Purse.subtract(purse, amount)).toEqual(Purse.newPurse(50, 4));
  });
  it('should REALLY give change', () => {
    purse = Purse.newPurse(0, 0, 0, 1);
    amount = Purse.newPurse(1);
    expect(Purse.subtract(purse, amount)).toEqual(Purse.newPurse(99, 99, 99));

    purse = Purse.newPurse(1000, 1000, 1000);
    amount = Purse.newPurse(500, 1001, 10);
    expect(Purse.subtract(purse, amount)).toEqual(Purse.newPurse(0, 4, 990));

    purse = Purse.newPurse(1000, 1000, 1000, 1001);
    amount = Purse.newPurse(1001, 1000, 1000, 1000);
    expect(Purse.subtract(purse, amount)).toEqual(Purse.newPurse(99, 99, 99));
  });
});