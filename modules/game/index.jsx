import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import cotw from '../enums/enums';
//import actions from '../actions';
//import ReactMixin from 'react-mixin';
import Games from '../collections/games';

//@ReactMixin.decorate(ReactMeteorData)
class GameView extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
  //getMeteorData() {
  //  Meteor.subscribe('games');
  //
  //
  //  Tracker.autorun(computation => {
  //    const games = Games.find().fetch();
  //
  //    if (computation.firstRun) return; // ignore first empty run
  //
  //    this.props.onMeteorData({games});
  //  });
  //  return {};
  //}
}

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