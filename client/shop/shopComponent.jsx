import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import actions from '/client/actions/index.js';

import {ItemType} from '/client/enums/cotwContent.js';

//dragdrop
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from './shopContainer.jsx';
import {EquipmentSlots} from '/client/enums/cotwContent.js';

const ShopView = ({building, equipment, containers, items, pack, packItems}) => (
  <div>
    <h1>Screen view :- {building && building.name}</h1>
    <span className='ui text container segment'>This is a inventory screen</span>
    <div className="ui two column grid">
      <div className="six wide column">
        <div className="ui grid">
          {
            containers && _.map(_.keys(EquipmentSlots), (slot) => {
              let iid = _.keys(containers[slot])[0];
              let item = iid ? items[iid] : null;

              return (
                <div className="three wide column" key={slot}>
                  <Container dropTargetType={EquipmentSlots[slot]} id={slot} type='Equipment' items={[item]} name={slot}/>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="ten wide column">
        <Container dropTargetType={_.values(ItemType)} id={building.cid} type='Shop' items={_.map(containers[building.cid], (isExists, iid) => items[iid])}/>
        <br/><br/><br/><br/>
        {
          pack ? <Container dropTargetType={_.values(ItemType)} id={pack.cid} pack={pack} type='Pack' items={packItems}/> : ''
        }
      </div>
    </div>
  </div>
);

const Shop = connect(
  (state) => {
    let pack = state.items[state.player.equipment['pack']];
    let packItems = pack && state.containers[pack.cid] && _.map(state.containers[pack.cid].items, (isExists, iid) => state.items[iid]);


    return {
      containers: state.containers,
      building  : state.buildings[state.game.currentBuilding],
      equipment : state.player.equipment,
      pack,
      packItems,
      items     : state.items
    }
  },
  (dispatch) => {
    return {}
  })(ShopView);

export default DragDropContext(HTML5Backend)(Shop);


/*
 onDrop : (iid, sourceCid, destCid, items) => {
 console.log(`OnDrop iid(${iid}) sourceCid(${sourceCid}) destCid(${destCid})`);
 if (sourceCid === destCid) {
 console.log('Dropping into the same container! Abort!');
 return;
 }

 // add item to equipment
 if (_.contains(_.keys(EquipmentSlots), sourceCid))
 dispatch({type: 'PLAYER_UNEQUIP', iid, equipmentType:sourceCid});
 if (_.contains(_.keys(EquipmentSlots), destCid))
 dispatch({type: 'PLAYER_EQUIP', iid, equipmentType:destCid});

 // add item to containers
 dispatch({type: 'CONTAINER_ADD_ITEM', iid, cid: destCid});
 dispatch({type: 'CONTAINER_REMOVE_ITEM', iid, cid: sourceCid});

 // update item(container) weight/bulk

 }*/
