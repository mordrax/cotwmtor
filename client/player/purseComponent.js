import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '/actions/index.js';

//dragdrop
import Container from '/client/misc/containerComponent.js';
import * as cotw from '/core/cotwContent.js';

export const Purse = ({purse}) => (
  <div className="ui grid">
    {
      purse &&
      <Container dropTargetType={cotw.ItemType.Purse}
                 id={purse.id}
                 type='Purse'
                 items={[]}
                 name='Purse'
      >
        <div id="copper">
          <div className="CoinsCopper cotwItem"></div>
          <div>{purse.copper}</div>
        </div>
        <div id="silver">
          <div className="CoinsSilver cotwItem"></div>
          <div>{purse.silver}</div>
        </div>
        <div id="gold">
          <div className="CoinsGold cotwItem"></div>
          <div>{purse.gold}</div>
        </div>
        <div id="platinum">
          <div className="CoinsPlatinum cotwItem"></div>
          <div>{purse.platinum}</div>
        </div>
      </Container>
    }
  </div>
);

Purse.propTypes = {
  purse: React.PropTypes.object.isRequired
};

export const mapState = (state) => {
  let purse = {};
  try {
    purse = state.items[state.player.equipment.purse];
  } catch (e) {
    console.error(`Player has no purse or the game has no items, the former is ok, it just means this component shouldn't have been called. The latter is worrying, you should probably contact the developer.`)
  }

  return {
    purse
  }
};

export const mapDispatch = dispatch => {
  return {
    onShowPurse: () => {
      dispatch(actions.showPurse());
    }
  }
};

const PurseContainer = connect(
  mapState,
  mapDispatch)(Purse);

export default PurseContainer;