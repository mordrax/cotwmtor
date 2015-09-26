FlowRouter.route('/game/:id', {
    action() {
        ReactLayout.render(MainLayout, {content: <MainGame/>});
    }
});

MainGame = React.createClass({
    render() {
        return (
            <h1>Welcome to the game!</h1>
        )
    }
});
