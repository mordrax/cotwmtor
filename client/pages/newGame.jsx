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
            attributes: {},
            gender: ""
        }
    },
    setDifficulty(level) {
        this.setState({difficulty: level});
    },
    setGender(gender) {
        this.setState({gender: gender})
    },
    setAttributes(attributes) {
        this.setState({
            str: attributes.Strength.value,
            dex: attributes.Dexterity.value,
            int: attributes.Intelligence.value,
            con: attributes.Constititution.value
        });
    },
    startGame() {
        console.log('starting game!!! hi: ' + this.state.name);
        Meteor.call('newGame', this.state, function (err, res) {
            if (err) {
                console.error(err);
            } else {
                FlowRouter.go('/game/'+res);
            }
        });
    },
    render() {
        return (
            <div className="ui one column grid container">
                    <div className="column">
                        <div className="ui fluid labeled input">
                            <div className="ui label">Character Name:</div>
                            <input type="text" name="name"
                                   placeholder="What word did your mother utter as you came kicking and screaming into this world?"
                                   valueLink={this.linkState('name')}/>
                        </div>
                    </div>

                <div className="row"><Attributes onSetAttributes={this.setAttributes}/></div>

                <div className="two column row">
                    <Gender setGender={this.setGender} gender={this.state.gender}/>
                    <div className="equal width column">Custom Character Icon</div>
                </div>
                <div className="row">
                    <GameDifficulty onSetDifficulty={this.setDifficulty} difficulty={this.state.difficulty}/>
                </div>

                <div className="row ui buttons">
                    <div className="ui button primary" onClick={this.startGame}>Ok</div>
                    <a href="/" className="ui button">Cancel</a>
                    <div className="ui button">View Icon</div>
                    <a href="https://en.wikipedia.org/wiki/Castle_of_the_Winds" className="ui button">Help</a>
                </div>

                <pre>{JSON.stringify(this.state)}</pre>
            </div>
        )
    }
});
