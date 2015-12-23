import React from 'react';
import cotw from '../../enums/enums.jsx';
import * as actions from '../../actions';
import {connect} from 'react-redux';
import classNames from 'classnames/bind';

let difficultyLevels = [
  {icon: "huge green circle icon", level: cotw.DifficultyLevel.Easy},
  {icon: "huge blue square icon", level: cotw.DifficultyLevel.Intermediate},
  {icon: "huge black square icon", level: cotw.DifficultyLevel.Difficult},
  {icon: "huge yellow warning sign icon", level: cotw.DifficultyLevel.ExpertsOnly}
];

const GameDifficultyView = ({
  difficulty,
  setDifficulty
}) => {

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
      difficulty: state.player.difficulty
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