import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import actions from '/actions/index.js';
import * as cotw from '/core/cotwContent.js';
import Container from '/client/misc/containerComponent.js';

export const ShopWindow = ({items, containerId}) => (
  <div className="ShopWindow-component">
    <div className="ui block header">Shop</div>
    <Container dropTargetType={_.values(cotw.ItemType)}
               id={containerId}
               items={_.map(items, (isExists, iid) => items[iid])}/>
  </div>
);

ShopWindow.PropTypes = {
  //React.PropTypes.string.isRequired,
  //React.PropTypes.func.isRequired,
  //React.PropTypes.object.isRequired,
  //React.PropTypes.number.isRequired
};

export const mapState = state => {
  let building = state.buildings[state.game.currentBuilding];

  let items = {};
  _.forEach(state.containers[building.cid], (isExist, itemId) => {
    if (!!isExist)
      items[itemId] = state.items[itemId];
  });

  return {
    items,
    containerId: building.cid
  }
};

export const mapDispatch = dispatch => {
  return {}
};

export default connect(
  mapState,
  mapDispatch)(ShopWindow);