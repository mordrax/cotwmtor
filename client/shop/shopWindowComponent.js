import React, {PropTypes as Type} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '/actions/index.js';
import * as cotw from '/core/cotwContent.js';
import Container from '/client/misc/containerComponent.js';

export const ShopWindow = ({items, containerId}) => (
  <div className="ShopWindow-component">
    <div className="ui block header">Shop</div>
    <Container dropTargetType={_.values(cotw.ItemType)}
               id={containerId}
               items={items}/>
  </div>
);

ShopWindow.PropTypes = {
  items: Type.arrayOf(Type.shape({
    id: Type.string,
    name: Type.string
  })).isRequired,
  containerId: Type.number.isRequired
};

export const mapState = state => {
  let building = state.buildings[state.game.currentBuilding];

  let items = [];
  _.forEach(state.containers[building.id], (isExist, itemId) => {
    if (!!isExist)
      items.push(state.items[itemId]);
  });

  return {
    items,
    containerId: building.id
  }
};

export const mapDispatch = dispatch => {
  return {}
};

export default connect(
  mapState,
  mapDispatch)(ShopWindow);