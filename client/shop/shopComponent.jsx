import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
/*
 <div className="six wide column">
 <div className="row">
 <div className="ui five column grid">
 <div className="column">1</div>
 <div className="column">2</div>
 <div className="column">3</div>
 <div className="column">4</div>
 <div className="column">5</div>
 </div>
 </div>
 <div className="row">
 <div className="ui three column grid">
 <div className="four wide column">
 <div className="ui segments">
 <div className="ui basic vertical segment">a</div>
 <div className="ui vertical segment">b</div>
 <div className="ui vertical segment">c</div>
 <div className="ui vertical segment">d</div>
 <div className="ui vertical segment">e</div>
 </div>
 </div>
 <div className="eight wide column">
 <i className="equipmentdude"></i>
 </div>
 <div className="four wide column">
 <div className="ui segments">
 <div className="ui segment">a</div>
 <div className="ui segment">b</div>
 <div className="ui segment">c</div>
 <div className="ui segment">d</div>
 <div className="ui segment">e</div>
 </div>
 </div>
 </div>
 </div>
 </div>
 */

const Slot = ({ item, type}) => (
  <div className="ui item">
    <div className="image">
      <i className={`cotwItem ${item.css}`} alt=""/>
    </div>
    <div className="content">
      <a className="header">{type}</a>
      <div className="meta">
        <span className="date"></span>
      </div>
      <div className="description">
        {item.name}
      </div>
    </div>
    {/*<div className="extra content">
      <a>
        <i className="user icon"></i>
        22 Friends
      </a>
    </div>*/}
  </div>
);

const ShopView = ({building, equipment}) => (
  <div>
    <h1>Screen view :- {building && building.name}</h1>
    <span className='ui text container segment'>This is a inventory screen</span>
    <div className="ui two column grid">
      <div className="six wide column">
        <div className="ui grid">
          <div className="three wide column">
            <Slot item={equipment.armor} type='Armor'/>
          </div>
          <div className="three wide column">
            <Slot item={equipment.neckwear} type='Neckwear'/>
          </div>
          <div className="three wide column">
            <Slot item={equipment.overgarment} type='Overgarment'/>
          </div>
          <div className="three wide column">
            <Slot item={equipment.helmet} type='Helmet'/>
          </div>
          <div className="three wide column">
            <Slot item={equipment.shield} type='Shield'/>
          </div>
          <div className="ten wide column equipmentdude"></div>
          <div className="three wide column">
            <Slot item={equipment.bracers} type='Bracers'/>
          </div>
          <div className="three wide column">
            <Slot item={equipment.gauntlets} type='Gauntlets'/>
          </div>
          <div className="three wide column">
            <Slot item={equipment.weapon} type='Weapon'/>
          </div>
          <div className="three wide column">
            <Slot item={equipment.freehand} type='Freehand'/>
          </div>
          <div className="three wide column">
            <Slot item={equipment.rightring} type='Rightring'/>
          </div>
          <div className="three wide column">
            <Slot item={equipment.leftring} type='Leftring'/>
          </div>
          <div className="three wide column">
            <Slot item={equipment.belt} type='Belt'/>
          </div>
          <div className="three wide column">
            <Slot item={equipment.boots} type='Boots'/>
          </div>
          <div className="three wide column">
            <Slot item={equipment.pack} type='Pack'/>
          </div>
          <div className="three wide column">
            <Slot item={equipment.purse} type='Purse'/>
          </div>
        </div>
      </div>
      <div className="ten wide column">
        <div className="ui segment">Shop inventory</div>
        {building && _.map(building.items, (item) => (
          <Slot item={item} />
        ))}
      </div>
    </div>
  </div>
);

const Shop = connect(
  (state) => {
    return {
      building: state.game.buildingScreen,
      equipment: state.player.equipment
    }
  },
  (dispatch) => {
    return {}
  })(ShopView);

export default Shop;