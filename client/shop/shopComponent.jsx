import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import actions from '/client/actions/index.js';
import Item from './item.jsx';
//dragdrop
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from './shopContainer.jsx';

const ShopView = ({building, equipment, movingItem, onMouseDown, onMouseMove}) => (
  <div>
    <h1>Screen view :- {building && building.name}</h1>
    <span className='ui text container segment'>This is a inventory screen</span>
    <div className="ui two column grid">
      <div className="six wide column">
        <div className="ui grid">
          <div className="three wide column">
            <Item item={equipment.armor} type='Armor'/>
          </div>
          <div className="three wide column">
            <Item item={equipment.neckwear} type='Neckwear'/>
          </div>
          <div className="three wide column">
            <Item item={equipment.overgarment} type='Overgarment'/>
          </div>
          <div className="three wide column">
            <Item item={equipment.helmet} type='Helmet'/>
          </div>
          <div className="three wide column">
            <Item item={equipment.shield} type='Shield'/>
          </div>
          <div className="ten wide column equipmentdude"></div>
          <div className="three wide column">
            <Item item={equipment.bracers} type='Bracers'/>
          </div>
          <div className="three wide column">
            <Item item={equipment.gauntlets} type='Gauntlets'/>
          </div>
          <div className="three wide column">
            <Item item={equipment.weapon} type='Weapon'/>
          </div>
          <div className="three wide column">
            <Item item={equipment.freehand} type='Freehand'/>
          </div>
          <div className="three wide column">
            <Item item={equipment.rightring} type='Rightring'/>
          </div>
          <div className="three wide column">
            <Item item={equipment.leftring} type='Leftring'/>
          </div>
          <div className="three wide column">
            <Item item={equipment.belt} type='Belt'/>
          </div>
          <div className="three wide column">
            <Item item={equipment.boots} type='Boots'/>
          </div>
          <div className="three wide column">
            <Item item={equipment.pack} type='Pack'/>
          </div>
          <div className="three wide column">
            <Item item={equipment.purse} type='Purse'/>
          </div>
        </div>
      </div>
      <div className="ten wide column">
        <div className="ui block header">Shop</div>
        <Container>
          <div className="ui grid" style={{border: '1px black dashed'}}>
            {building && _.map(building.items, (item) => (
              <Item item={item} key={item.name}/>
            ))}
          </div>
        </Container>
      </div>
    </div>
  </div>
);

const Shop = connect(
  (state) => {
    return {
      building  : state.game.buildingScreen,
      equipment : state.player.equipment,
      movingItem: state.game.movingItem
    }
  },
  (dispatch) => {
    return {
      onMouseDown: (item) => {
        dispatch(actions.selectItem(item));
      },
      onMouseMove: (e) => {
        dispatch(actions.moveItem(e));
      }
    }
  })(ShopView);

export default DragDropContext(HTML5Backend)(Shop);