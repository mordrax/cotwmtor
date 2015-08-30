FlowRouter.route('/', {
    action() {
        ReactLayout.render(MainLayout, {content: <MainPage/>});
    }
});
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
MainPage = React.createClass({
    componentDidMount() {
        //console.log('setting timeout for fadein');
        //setTimeout(function () {$('#subtitle').addClass('fadein');}, 1000);
    },
    render() {
        return (
            <div id="title" style={{backgroundColor:'black'}} className="ui middle aligned center aligned grid fullscreen">
                <div className="ui one column">
                    <div className="ui column">
                        <img src="/images/landing_cotw1.jpg"/>
                    </div>

                    <div className="ui column">
                        <ReactCSSTransitionGroup transitionName="fadein" transitionAppear={true}>
                            <img src="/images/landing_cotw2.jpg"/>
                        </ReactCSSTransitionGroup>
                    </div>

                    <div className="ui column">
                        <div className="ui buttons">
                            <a href="new" className="ui button primary">New Game</a>
                            <a href="load" className="ui button">Load Game</a>
                            <a href="overview" className="ui button">Overview</a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
});