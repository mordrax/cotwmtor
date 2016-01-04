import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Title extends Component {
  componentDidMount() {
    //console.log('setting timeout for fadein');
    //setTimeout(function () {$('#subtitle').addClass('fadein');}, 1000);
  }
  render() {
    return (
      <div id="title" style={{backgroundColor:'black'}} className="ui middle aligned center aligned grid fullscreen">
        <div className="ui one column">
          <div className="ui column">
            <img src='assets/landing_cotw1.jpg'/>
          </div>

          <div className="ui column">
            <ReactCSSTransitionGroup transitionName="fadein"
                                     transitionAppear={true}
                                     transitionAppearTimeout={500}
                                     transitionEnterTimeout={500}
                                     transitionLeaveTimeout={500}>
              <img src='assets/landing_cotw2.jpg'/>
            </ReactCSSTransitionGroup>
          </div>

          <div className="ui column">
            <div className="ui buttons">
              <Link to="new" className="ui button primary">New Game</Link>
              <Link to="load" className="ui button">Load Game</Link>
              <Link to="overview" className="ui button">Overview</Link>
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Title;