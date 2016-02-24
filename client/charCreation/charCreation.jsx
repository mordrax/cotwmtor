import React, { Component, PropTypes } from 'react';
import Attributes from './attributes.jsx';
import GameDifficulty from './gameDifficulty.jsx';
import Gender from './gender.jsx';
import { connect } from 'react-redux';
import actions from '/client/actions/index';
import { routeActions } from 'redux-simple-router';

const CharCreation = ({
  player,
  onCompleted,
  onCancelled,
  onChangeName
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
        <Attributes attributes={player.attributes}/>
        <div className="ui vertical segments">
          <div className="ui vertical segment">Character Gender</div>
          <div className="ui vertical segment">
            <Gender gender={player.gender} />
          </div>
        </div>
        <GameDifficulty difficulty={player.difficulty} />
        <div className="ui button primary" onClick={onCompleted.bind(this, player)}>Ok</div>
        <div className="ui button" onClick={onCancelled}>Cancel</div>
        <div className="ui button">View Icon</div>
        <div className="ui button">Help</div>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    player: state.player
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCompleted: (player) => {
      Meteor.call('newGame', player, function (data) {
        console.log('new game return: ' + data);
      });
      dispatch(routeActions.push('/game'));
      dispatch(actions.initGame());
    },
    onCancelled: () => {
      dispatch(routeActions.push('/'));
    },
    onChangeName: (input) => {
      dispatch(actions.changeName(input));
    }
  }
};

const CharCreationContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(CharCreation);

export default CharCreationContainer;