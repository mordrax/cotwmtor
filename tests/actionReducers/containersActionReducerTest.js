import * as actions from '/actions/index.js';
import * as cotw from '/core/cotwContent.js';
import * as Item from '/core/item.js';

import {storeSetup, dispatch, getState} from '/tests/core/testStore.js';

const pack = Item.generateItem(cotw.Items.Pack.EnchantedMediumPackOfHolding);
const sword = Item.generateItem(cotw.Items.Weapon.BastardSword);

describe("ActionReducers: Containers", () => {
  describe('Basic container interactions', () => {
    beforeEach(storeSetup);
    
    it('should add a container if item is a bag or pack', () => {
      dispatch(actions.addItem(pack));
      expect(getState().containers[pack.id]).toEqual({});
    });

    it('should not add a container if item is not a bag or pack', () => {
      dispatch(actions.addItem(sword));
      expect(getState().containers[sword.id]).toEqual(undefined);
    });

    it('should remove a pack from containers', () => {
      dispatch(actions.addItem(pack));
      dispatch(actions.removeItem(pack.id));
      expect(getState().containers[pack.id]).toEqual(undefined);
    });
  });
});