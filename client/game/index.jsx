import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import actions from '/client/actions';
import Games from '/collections/games';

var GameView = React.createClass({
  mixins: [ReactMeteorData],
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  },
  getMeteorData() {
    Meteor.subscribe('games');


    Tracker.autorun(computation => {
      const games = Games.find().fetch();

      if (computation.firstRun) return; // ignore first empty run

      this.props.onMeteorData({games});
    });
    return {};
  }
});

let Game = connect(
  (state) => {
    return {
      game: state
    }
  },
  (dispatch) => {
    return {
      onMeteorData: (data) => {
        dispatch(actions.updateData(data));
      }
    }
  }
)(GameView);

export default Game;