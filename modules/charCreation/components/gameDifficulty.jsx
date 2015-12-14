import React from 'react';
import cotw from '../../enums/enums.jsx';

var GameDifficulty = React.createClass({
  propTypes: {
    // triggered with the difficulty level as first parameter
    onSetDifficulty: React.PropTypes.func.isRequired,
    defaultDifficulty: React.PropTypes.number.isRequired
  },
  getInitialState() {
    return {
      difficulty: this.props.defaultDifficulty
    }
  },
  getDefaultProps() {
    return {
      difficultyLevels: [
        {icon: "huge green circle icon", level: cotw.DifficultyLevel.Easy},
        {icon: "huge blue square icon", level: cotw.DifficultyLevel.Intermediate},
        {icon: "huge black square icon", level: cotw.DifficultyLevel.Difficult},
        {icon: "huge yellow warning sign icon", level: cotw.DifficultyLevel.ExpertsOnly}
      ]
    }
  },
  render() {
    return (
      <div className="four ui buttons">
        {this.props.difficultyLevels.map(function (level, i) {
          var classes = "ui icon button";
          if (this.state.difficulty === level.level)
            classes += " active";

          return (
            <div className={classes} onClick={this.props.onSetDifficulty.bind(null, level.level)} key={i}>
              <div><i className={level.icon}></i></div>
              <label>{cotw.DifficultyLevel[level.level]}</label>
            </div>
          );
        }, this)}
      </div>
    )
  }
});

export default GameDifficulty