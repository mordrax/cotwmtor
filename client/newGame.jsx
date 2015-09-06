FlowRouter.route('/new', {
    action() {
        ReactLayout.render(MainLayout, {content: <NewGame />});
    }
});

NewGame = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState() {
        return {
            name: "Testing",
            difficulty: cotw.DifficultyLevel.Easy
        }
    },
    setDifficulty(level) {
        this.setState({difficulty: level});
    },
    render() {
        return (
            <div className="ui middle aligned center aligned grid fullscreen">
                <div className="ui one column">
                    <div className="ui stacked segment">
                        <div className="ui horizontal segments">
                            <div className="ui labeled input segment">
                                <div className="ui label">Character Name:</div>
                                <input type="text" name="name" placeholder="What word did your mother utter as you came kicking and screaming into this world?" valueLink={this.linkState('name')}/>
                            </div>
                        </div>
                        <Attributes />
                        <div className="ui horizontal segments">
                            <div className="ui segment">Character Gender</div>
                            <div className="ui segment">Custom Character Icon</div>
                        </div>
                        <GameDifficulty setDifficulty={this.setDifficulty} />
                        <div className="ui button primary">Ok</div>
                        <div className="ui button">Cancel</div>
                        <div className="ui button">View Icon</div>
                        <div className="ui button">Help</div>
                    </div>
                    <pre>{JSON.stringify(this.state)}</pre>
                </div>
            </div>
        )
    }
});
