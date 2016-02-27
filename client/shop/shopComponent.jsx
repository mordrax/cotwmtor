import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import actions from '/client/actions/index.js';
import Item from './item.jsx';
import {ItemType} from '/client/enums/cotwContent.js';

//dragdrop
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from './shopContainer.jsx';
import {EquipmentSlots} from '/client/enums/cotwContent.js';

const ShopView = ({building, equipment, containers, items, pack}) => (
  <div>
    <h1>Screen view :- {building && building.name}</h1>
    <span className='ui text container segment'>This is a inventory screen</span>
    <div className="ui two column grid">
      <div className="six wide column">
        <div className="ui grid">
          {
            containers && _.map(_.keys(EquipmentSlots), (slot) => {
              let iid = _.keys(containers[slot])[0];

              return (
                <div className="three wide column" key={slot}>
                  <Container dropTargetType={EquipmentSlots[slot]} id={slot} name={slot}>
                    {iid ? <Item dragTargetType={items[iid].type} cid={slot} item={items[iid]}/> : ''}
                  </Container>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="ten wide column">
        <Container dropTargetType={_.values(ItemType)} id={building.cid} type='Item'>
          <div className="ui block header">Shop</div>
          <div className="ui grid" style={{border: '1px black dashed', minHeight: '20px'}}>
            {
              building && containers && _.map(containers[building.cid], (isExists, iid) => {
                if (isExists)
                  return <Item dragTargetType={items[iid].type} cid={building.cid} item={items[iid]} key={iid}/>;
                else
                  return ''
              })
            }
          </div>
        </Container>
        {
          !pack ? '' :
            <Container dropTargetType={_.values(ItemType)} id={pack.cid} type='Item'>
              <div className="ui block header">Pack</div>
              <div className="ui grid" style={{border: '1px black dashed', minHeight: '20px'}}>
                {
                  _.map(containers[pack.cid], (isExists, iid) => {
                    if (isExists)
                      return <Item dragTargetType={items[iid].type} cid={pack.cid} item={items[iid]} key={iid}/>;
                    else
                      return ''
                  })
                }
              </div>
            </Container>
        }
      </div>
    </div>
  </div>
);

const Shop = connect(
  (state) => {
    return {
      containers: state.containers,
      building  : state.buildings[state.game.currentBuilding],
      equipment : state.player.equipment,
      pack: state.items[state.player.equipment['pack']],
      items: state.items
    }
  },
  (dispatch) => {
    return {}
  })(ShopView);

export default DragDropContext(HTML5Backend)(Shop);