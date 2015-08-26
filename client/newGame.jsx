FlowRouter.route('/new', {
    action() {
        ReactLayout.render(MainLayout, {content: <NewGame />});
    }
});

var NewGame = React.createClass({
    render() {
        return (
            <div className="container">
                <h1 style={{backgroundColor:'blue'}}>Character Creation</h1>

                <div className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="name1" className="control-label col-sm-2"> Character name: </label>

                        <div className="col-sm-10">
                            <input id="name1" className="form-control" placeholder="Name..."/>
                        </div>
                    </div>
                </div>

                // attributes


                // icon

                // difficulty

                <div>
                    <div className="btn btn-success">Start Game</div>
                    <div className="btn btn-default pull-right">Back</div>
                </div>
            </div>
        )
    }
});
