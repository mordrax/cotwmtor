import React from 'react';
import { connect } from 'react-redux';

import Equipment from '/client/player/equipmentComponent.js';
import ShopWindow from '/client/shop/shopWindowComponent.js';
import Pack from '/client/player/packComponent.js';
import Purse from '/client/player/purseComponent.js';

//notification
import { Notification } from 'react-notification';

//dragdrop
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

export const ShopView = ({building, isShowPurse, notifications}) => (
  <div>
    {
      _.map(notifications, notification => {
        return <Notification
          isActive={true}
          message={notification.msg}
          action={notification.action}
          onClick={notification.cb}
        />
      })
    }
    <h1 className="test-building-name">Screen view :- {building && building.name}</h1>
    <span className='ui text container segment'>This is a inventory screen</span>
    <div className="ui two column grid">
      <div className="six wide column">
        <div className="ui grid">
          {
            <Equipment />
          }
        </div>
      </div>
      <div className="ten wide column">
        {
          <ShopWindow>
            <h1>BLah!</h1>
          </ShopWindow>
        }
        <br/><br/><br/><br/>
        <Pack />
        <br/><br/><br/><br/>
        {
          isShowPurse && <Purse />
        }
      </div>
    </div>
  </div>
);

export const mapState = (state) => {
  const building = state.buildings[state.game.currentBuilding];
  const notifications = state.notifications;

  return {
    notifications,
    building,
    isShowPurse: state.game.showPurse
  }
};

const Shop = connect(
  mapState,
  (dispatch) => {
    return {}
  })(ShopView);

export default DragDropContext(HTML5Backend)(Shop);
