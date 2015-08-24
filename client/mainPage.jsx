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
            <div id="title" style={{backgroundColor:'black'}} className="fullscreen flexbox-container">
                <div style={{margin:'auto'}}>
                    <img src="/images/landing_cotw1.jpg" className="img-responsive center-block"/>

                    <ReactCSSTransitionGroup transitionName="fadein" transitionAppear={true}>
                        <img src="/images/landing_cotw2.jpg" className="img-responsive center-block"/>
                    </ReactCSSTransitionGroup>

                    <div className="text-center">
                        <div className="btn-group">
                            <a href="new" className="btn btn-success">New Game</a>
                            <a href="load" className="btn btn-default">Load Game</a>
                            <a href="overview" className="btn btn-default">Overview</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});