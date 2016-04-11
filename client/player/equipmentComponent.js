import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '/actions/index.js';

//dragdrop
import Container from '/client/misc/containerComponent.jsx';
import {ItemType, EquipmentSlotToItemType} from '/core/cotwContent.js';

export const Equipment = ({equipment, onShowPurse}) => (
  <div className="ui grid">
    {
      _.map(equipment, (item, slot) => {
        return (
          <div className={`three wide column equipmentSlot ${slot}`}
               key={slot}
               onClick={() => onShowPurse()}
          >
            {
              <Container dropTargetType={EquipmentSlotToItemType[slot]}
                         id={slot}
                         type='Equipment'
                         items={[item]}
                         name={slot}
              />
            }
          </div>
        )
      })
    }
  </div>
);

Equipment.propTypes = {
  equipment: React.PropTypes.object.isRequired
};

export const mapState = (state) => {
  const equipment = {};

  if (state && state.player.equipment)
    _.forEach(state.player.equipment, (id, slot) => {
      equipment[slot] = state.items[id] || null;
    });

  return {
    equipment
  }
};

export const mapDispatch = dispatch => {
  return {
    onShowPurse: () => {
      dispatch(actions.showPurse());
    }
  }
};

const EquipmentContainer = connect(
  mapState,
  mapDispatch)(Equipment);

export default EquipmentContainer;