import React, { Component, PropTypes } from 'react';
import Attributes from './attributes.jsx';
import GameDifficulty from './gameDifficulty.jsx';
import Gender from './gender.jsx';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import { routeActions } from 'redux-simple-router';
import {generateAreas, generateBuildings} from '../../core/maps.js';

export const CharCreation = ({
  player,
  onCompleted,
  onCancelled,
  onChangeName,
  onChangeGender,
  onSetDifficulty,
  onChangeAttribute
  }) => (
  <div className="ui middle aligned center aligned grid">
    <div className="ui one column">
      <div className="ui stacked vertical segment">
        <div className="ui vertical segment">
          <div className="ui labeled fluid input">
            <div className="ui label">Character name:</div>
            <input
              type="text" name="name" placeholder="What word did your mother utter as you came kicking and screaming into this world?"
              onChange={(e) => onChangeName(e.target.value)}
              value={player.name}
            />
          </div>
        </div>
        <Attributes attributes={player.attributes} onChangeAttribute={onChangeAttribute}/>
        <div className="ui vertical segments">
          <div className="ui vertical segment">Character Gender</div>
          <div className="ui vertical segment">
            <Gender gender={player.gender} onChangeGender={onChangeGender}/>
          </div>
        </div>
        <GameDifficulty difficulty={player.difficulty} setDifficulty={onSetDifficulty}/>
        <div className="ui button primary" onClick={() => onCompleted(player)}>Ok</div>
        <div className="ui button" onClick={onCancelled}>Cancel</div>
        <div className="ui button">View Icon</div>
        <div className="ui button">Help</div>
      </div>
    </div>
  </div>
);

export const mapState = (state) => {
  return {
    player: state.player
  }
};

export const mapDispatch = (dispatch) => {
  return {
    onCompleted      : (player) => {
      Meteor.call('newGame', player, function (data) {
        console.log('new game return: ' + data);
      });
      dispatch(routeActions.push('/game'));
      //dispatch({type: "INIT_GAME", map: generateAreas(), buildings: generateBuildings(dispatch)});
    },
    onCancelled      : () => dispatch(routeActions.push('/')),
    onChangeName     : input => dispatch(actions.changeName(input)),
    onChangeGender   : gender => dispatch(actions.setGender(gender)),
    onSetDifficulty  : lvl => dispatch(actions.setDifficulty(lvl)),
    onChangeAttribute: (attr, val) => dispatch(actions.setAttribute(attr, val))
  }
};

const CharCreationContainer = connect(
  mapState,
  mapDispatch
)(CharCreation);

export default CharCreationContainer;