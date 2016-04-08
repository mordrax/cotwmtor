import React from 'react';
import * as actions from '../../actions/index';
import {connect} from 'react-redux';
import classNames from '../../node_modules/classnames/bind';
import Game from '../../collections/games';

export const DifficultyLevel = {
  "Easy": 0,
  "Intermediate": 1,
  "Difficult": 2,
  "ExpertsOnly": 3,
  0: "Easy",
  1: "Intermediate",
  2: "Difficult",
  3: "Experts Only"
};
let difficultyLevels = [
  {icon: "huge green circle icon", level: DifficultyLevel.Easy},
  {icon: "huge blue square icon", level: DifficultyLevel.Intermediate},
  {icon: "huge black square icon", level: DifficultyLevel.Difficult},
  {icon: "huge yellow warning sign icon", level: DifficultyLevel.ExpertsOnly}
];

const GameDifficulty = ({
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
            <label>{DifficultyLevel[level.level]}</label>
          </div>
        );
      }, this)}
    </div>
  )
};

export default GameDifficulty;