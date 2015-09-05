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
        return {difficulty: cotw.DifficultyLevel.Easy}
    },
    setDifficulty(level) {
        console.log('setting difficulty level: ' + level);
    },
    render() {
        return (
            <div className="four ui buttons">
                <DifficultyLevel icon="huge green circle icon" level={cotw.DifficultyLevel.Easy}/>
                <DifficultyLevel icon="huge blue square icon" level={cotw.DifficultyLevel.Intermediate}/>
                <DifficultyLevel icon="huge black square icon" level={cotw.DifficultyLevel.Difficult}/>
                <DifficultyLevel icon="huge yellow warning sign icon" level={cotw.DifficultyLevel.ExpertsOnly}/>
            </div>
        )
    }
});

DifficultyLevel = React.createClass({
    getInitialState() {
        return {active:false}
    },
    handleClick() {
        console.log("Diff level: " + this.props.level + " clicked!");
        this.state.active = true;
    },
    render() {
        var classes = "ui icon button";
        classes += this.state.active?"active":"";

        return (
            <div className={classes} onClick={this.handleClick}>
                <div><i className={this.props.icon}></i></div>
                <label>{cotw.DifficultyLevel[this.props.level]}</label>
            </div>
        )
    }
});