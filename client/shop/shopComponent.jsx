import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import actions from '/client/actions/index.js';
import Item from './item.jsx';

//dragdrop
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from './shopContainer.jsx';

let equipmentTypes = [
  'armor'
  , 'neckwear'
  , 'overgarment'
  , 'helmet'
  , 'shield'
  , 'bracers'
  , 'gauntlets'
  , 'weapon'
  , 'freehand'
  , 'rightring'
  , 'leftring'
  , 'belt'
  , 'boots'
  , 'pack'
  , 'purse'
];

const ShopView = ({building, equipment, containers, items}) => {
  return (  <div>
      <h1>Screen view :- {building && building.name}</h1>
      <span className='ui text container segment'>This is a inventory screen</span>
      <div className="ui two column grid">
        <div className="six wide column">
          <div className="ui grid">
            {
              containers && _.map(equipmentTypes, (equipmentType) => {
                let iid = _.keys(containers[equipmentType])[0];

                return (
                  <div className="three wide column" key={equipmentType}>
                    <Container id={equipmentType} name={equipmentType}>
                      {iid ? <Item cid={equipmentType} item={items[iid]}/> : ''}
                    </Container>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="ten wide column">
          <div className="ui block header">Shop</div>
          <Container id={building.cid} type='Item'>
            <div className="ui grid" style={{border: '1px black dashed', minHeight: '20px'}}>
              {
                building && containers && _.map(containers[building.cid], (isExists, iid) => {
                  if (isExists)
                    return <Item cid={building.cid} item={items[iid]} key={iid}/>;
                  else
                    return ''
                })
              }
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
};

const Shop = connect(
  (state) => {
    return {
      containers: state.containers,
      building  : state.buildings[state.game.currentBuilding],
      equipment : state.player.equipment,

      items: state.items
    }
  },
  (dispatch) => {
    return {}
  })(ShopView);

export default DragDropContext(HTML5Backend)(Shop);