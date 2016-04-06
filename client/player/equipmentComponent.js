import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import actions from '/actions/index.js';

//dragdrop
import Container from '/client/misc/containerComponent.js';
import {ItemType, EquipmentSlots} from '/core/cotwContent.js';

export const Equipment = ({equipment}) => (
  <div className="ui grid">
    {
      _.map(equipment, (item, slot) => {
        return (
          <div className={`three wide column equipmentSlot ${slot}`} key={slot}>
            {
              <Container dropTargetType={slot} id={slot} type='Equipment' items={[item]} name={slot}/>
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

const EquipmentContainer = connect(
  mapState,
  (dispatch) => {
    return {}
  })(Equipment);

export default EquipmentContainer;