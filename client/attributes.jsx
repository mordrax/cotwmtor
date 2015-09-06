Attributes = React.createClass({
    render() {
        return (
            <div className="ui horizontal segments">
                <div className="ui segment">Available</div>
                <div className="ui segment">Strength</div>
                <div className="ui segment">Intelligence</div>
                <div className="ui segment">constitution</div>
                <div className="ui segment">Dexterity</div>
            </div>
        )
    }
});


GameDifficulty = React.createClass({
    getInitialState() {
        return {
            difficultyLevels: [
                {icon: "huge green circle icon", level: cotw.DifficultyLevel.Easy},
                {icon: "huge blue square icon", level: cotw.DifficultyLevel.Intermediate},
                {icon: "huge black square icon", level: cotw.DifficultyLevel.Difficult},
                {icon: "huge yellow warning sign icon", level: cotw.DifficultyLevel.ExpertsOnly}
            ]
        }
    },
    setDifficulty(level) {
        this.props.setDifficulty(level);
    },
    render() {
        return (
            <div className="four ui buttons">
                {this.state.difficultyLevels.map(function (level, i) {
                    var classes = "ui icon button";
                    if (this.props.difficulty === level.level)
                        classes += " active";

                    return (
                        <div className={classes} onClick={this.setDifficulty.bind(this, level.level)}>
                            <div><i className={level.icon}></i></div>
                            <label>{cotw.DifficultyLevel[level.level]}</label>
                        </div>
                    );
                }, this)}
            </div>
        )
    }
});