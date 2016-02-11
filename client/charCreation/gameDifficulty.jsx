import React from 'react';
import {cotw}from '/client/enums/enums.jsx';
import actions from '/client/actions/index';
import {connect} from 'react-redux';
import classNames from '/node_modules/classnames/bind';
import Game from '/collections/games';

let difficultyLevels = [
  {icon: "huge green circle icon", level: cotw.DifficultyLevel.Easy},
  {icon: "huge blue square icon", level: cotw.DifficultyLevel.Intermediate},
  {icon: "huge black square icon", level: cotw.DifficultyLevel.Difficult},
  {icon: "huge yellow warning sign icon", level: cotw.DifficultyLevel.ExpertsOnly}
];

const GameDifficultyView = ({
  difficulty,
  game,
  setDifficulty
}) => {
  console.dir('games in game difficulty: ', game&&game.games, game&&game.games&&game.games[0]);
  return (
    <div className="four ui buttons">
      {difficultyLevels.map(function (level, i) {
        return (
          <div
            className={classNames('ui icon button', {active:difficulty === level.level}) }
            onClick={() => setDifficulty(level.level)}
            key={i}>
            <div><i className={level.icon} /></div>
            <label>{cotw.DifficultyLevel[level.level]}</label>
          </div>
        );
      }, this)}
    </div>
  )
};

const GameDifficulty = connect (
  (state) => {
    return {
      difficulty: state.player.difficulty,
      game: state.game
    }
  },
  (dispatch) => {
    return {
      setDifficulty: (level) => {
        dispatch(actions.setDifficulty(level))
      }
    }
  }
)(GameDifficultyView);

export default GameDifficulty;