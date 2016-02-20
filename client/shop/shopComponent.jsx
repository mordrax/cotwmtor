import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import actions from '/client/actions/index.js';
import Item from './item.jsx';
//dragdrop
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from './shopContainer.jsx';

const ShopView = ({building, equipment, onMouseDown, onMouseMove}) => (
  <div>
    <h1>Screen view :- {building && building.name}</h1>
    <span className='ui text container segment'>This is a inventory screen</span>
    <div className="ui two column grid">
      <div className="six wide column">
        <div className="ui grid">
          <div className="three wide column">
            <Container id='Armor'>
              { !!equipment.armor ? <Item item={equipment.armor} type='Armor'/> :''}
            </Container>
          </div>
          <div className="three wide column">
            <Container id='Neckwear' type='Neckwear'>
              { !!equipment.neckwear ? <Item item={equipment.neckwear} type='Neckwear'/> :''}
            </Container>
          </div>
          <div className="three wide column">
            <Container id='Overgarment' type='Overgarment'>
              { !!equipment.overgarment ? <Item item={equipment.overgarment} type='Overgarment'/> :''}
            </Container>
          </div>
          <div className="three wide column">
            <Container id='Helmet' type='Helmet'>
              { !!equipment.helmet ? <Item item={equipment.helmet} type='Helmet'/> :''}
            </Container>
          </div>
          <div className="three wide column">
            <Container id='Shield' type='Shield'>
              { !!equipment.shield ? <Item item={equipment.shield} type='Shield'/> :''}
            </Container>
          </div>
          <div className="ten wide column equipmentdude"></div>
          <div className="three wide column">
            <Container id='Bracers' type='Bracers'>
              { !!equipment.bracers ? <Item item={equipment.bracers} type='Bracers'/> :''}
            </Container>
          </div>
          <div className="three wide column">
            <Container id='Gauntlets' type='Gauntlets'>
              { !!equipment.gauntlets ? <Item item={equipment.gauntlets} type='Gauntlets'/> :''}
            </Container>
          </div>
          <div className="three wide column">
            <Container id='Weapon' type='Item'>
              { !!equipment.weapon ? <Item item={equipment.weapon} type='Weapon'/> :''}
            </Container>
          </div>
          <div className="three wide column">
            <Container id='Freehand' type='Item'>
              { !!equipment.freehand ? <Item item={equipment.freehand} type='Freehand'/> :''}
            </Container>
          </div>
          <div className="three wide column">
            <Container id='Rightring' type='Ring'>
              { !!equipment.rightring ? <Item item={equipment.rightring} type='Rightring'/> :''}
            </Container>
          </div>
          <div className="three wide column">
            <Container id='Leftring' type='Ring'>
              { !!equipment.leftring ? <Item item={equipment.leftring} type='Leftring'/> :''}
            </Container>
          </div>
          <div className="three wide column">
            <Container id='Belt' type='Belt'>
              { !!equipment.belt ? <Item item={equipment.belt} type='Belt'/> :''}
            </Container>
          </div>
          <div className="three wide column">
            <Container id='Boots' type='Boots'>
              { !!equipment.boots ? <Item item={equipment.boots} type='Boots'/> :''}
            </Container>
          </div>
          <div className="three wide column">
            <Container id='Pack' type='Pack'>
              { !!equipment.pack ? <Item item={equipment.pack} type='Pack'/> :''}
            </Container>
          </div>
          <div className="three wide column">
            <Container id='Purse' type='Purse'>
              { !!equipment.purse ? <Item item={equipment.purse} type='Purse'/> :''}
            </Container>
          </div>
        </div>
      </div>
      <div className="ten wide column">
        <div className="ui block header">Shop</div>
        <Container id={building.id} type='Item' onDrop={(item) => {
          console.log('should add ' + item.item.id + ' to ' + building.id);
        }}>
          <div className="ui grid" style={{border: '1px black dashed'}}>
            {building && _.map(building.items, (item) => (
              <Item item={item} key={item.id}/>
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
      building : state.buildings[state.game.currentBuilding],
      equipment: state.player.equipment
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