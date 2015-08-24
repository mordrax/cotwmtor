FlowRouter.route('/new', {
    action() {
        ReactLayout.render(MainLayout, <NewGame />);
    }
});

var NewGame = React.createClass({
    render() {
        return (
            <h1>New Game</h1>
        )
    }
});
