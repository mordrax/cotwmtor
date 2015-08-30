FlowRouter.route('/new', {
    action() {
        ReactLayout.render(MainLayout, {content: <NewGame />});
    }
});

var NewGame = React.createClass({
    render() {
        return (
            <div className="ui middle aligned center aligned grid fullscreen">
                <div className="ui one column">
                    <div className="ui stacked segment">
                        <div className="ui horizontal segments">
                            <div className="ui labeled input segment">
                                <div className="ui label">Character Name:</div>
                                <input type="text" name="name" placeholder="What word did your mother utter as you came kicking and screaming into this world?"/>
                            </div>
                        </div>
                        <div className="ui horizontal segments">
                            <div className="ui segment">Available</div>
                            <div className="ui segment">Strength</div>
                            <div className="ui segment">Intelligence</div>
                            <div className="ui segment">constitution</div>
                            <div className="ui segment">Dexterity</div>
                        </div>
                        <div className="ui horizontal segments">
                            <div className="ui segment">Character Gender</div>
                            <div className="ui segment">Custom Character Icon</div>
                        </div>
                        <div className="ui horizontal segments">
                            <div className="ui segment">Easy</div>
                            <div className="ui segment">Intermediate</div>
                            <div className="ui segment">Difficult</div>
                            <div className="ui segment">Experts Only</div>
                        </div>

                            <div className="ui button primary">Ok</div>
                            <div className="ui button">Cancel</div>
                            <div className="ui button">View Icon</div>
                            <div className="ui button">Help</div>
                    </div>
                </div>
            </div>
        )
    }
});
