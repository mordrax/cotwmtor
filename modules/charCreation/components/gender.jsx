import React from 'react'
import classNames from 'classnames/bind';

var Gender = React.createClass({
  propTypes: {
    setGender: React.PropTypes.func.isRequired,
    gender: React.PropTypes.string.isRequired
  },
  render() {
    return (
      <div className="equal width column">
        <div className="ui large buttons">
          <div className={classNames("ui labeled icon button", {active:this.props.gender === 'male'})}
               onClick={this.props.setGender.bind(null, 'male')}>
            <i className="large male icon" />
            Male
          </div>
          <div className="or"></div>
          <div className={classNames("ui labeled icon button", {active:this.props.gender==='female'})}
               onClick={this.props.setGender.bind(null, 'female')}>
            <i className="large female icon" />
            Female
          </div>
        </div>
      </div>
    )
  }
});

export default Gender;