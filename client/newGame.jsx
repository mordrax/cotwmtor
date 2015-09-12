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
            difficulty: cotw.DifficultyLevel.Easy,
            attributes: {}
        }
    },
    setDifficulty(level) {
        this.setState({difficulty: level});
    },
    setAttributes(attributes) {
        this.setState({attributes: attributes});
    },
    render() {
        return (
            <div className="ui one column grid container">
                <div className="row">
                    <div className="column">
                        <div className="ui fluid labeled input">
                            <div className="ui label">Character Name:</div>
                            <input type="text" name="name"
                                   placeholder="What word did your mother utter as you came kicking and screaming into this world?"
                                   valueLink={this.linkState('name')}/>
                        </div>
                    </div>

                </div>

                <div className="row"><Attributes onSetAttributes={this.setAttributes}/></div>

                <div className="two column row">
                    <div className="equal width column">
                        <div className="ui large buttons">
                            <div className="ui labeled icon button"><i className="large male icon"></i>Male</div>
                            <div className="or"></div>
                            <div className="ui labeled icon button"><i className="large female icon"></i>Female</div>
                        </div>
                    </div>
                    <div className="equal width column">Custom Character Icon</div>
                </div>
                <div className="row"><GameDifficulty onSetDifficulty={this.setDifficulty}/></div>

                <div className="row ui buttons">
                    <div className="ui button primary">Ok</div>
                    <div className="ui button">Cancel</div>
                    <div className="ui button">View Icon</div>
                    <div className="ui button">Help</div>
                </div>

                <pre>{JSON.stringify(this.state)}</pre>
            </div>
        )
    }
});
