import React from 'react';
import cotw from '../../enums/enums.jsx';

var Attribute = React.createClass({
  propTypes: {
    // called with a object specifying attributes
    onSetAttribute: React.PropTypes.func.isRequired,
    descriptions: React.PropTypes.array.isRequired,
    name: React.PropTypes.string.isRequired
  },
  getInitialState() {
    return {
      value: 50
    }
  },
  changeAttr(value) {
    var availablePoints = this.state.attributes.Available.value;

    // if adding, check there's enough available
    // if subtracting, cap available at 100
    if (availablePoints - value < 0 || availablePoints - value > 100) return;
    if (attr.value + value < 0 || attr.value + value > 100) return;

    attr.value += value;
    this.state.attributes.Available.value -= value;
    this.setState(attr);

    this.props.onSetAttribute(this.state.attributes);

    console.log(attr + " " + value);
  },
  renderButtons() {
    return (<div className="ui buttons">
      <button className="ui icon button" onClick={this.changeAttr.bind(this, -5)}>
        <i className="ui icon minus"/>
      </button>
      <button className="ui icon button" onClick={this.changeAttr.bind(this, 5)}>
        <i className="ui icon plus"/>
      </button>
    </div>);
  },
  renderDescription() {
    var self = this;
    return (<p>
      {
        _.find(self.props.descriptions, function (desc) {
          return self.state.value <= desc.value;
        }).text
      }
    </p>)
  },
  render() {
    return (
      <div className="ui segments">
        <div className="ui segment left aligned">
          <h4 className="ui header">{this.props.name}:</h4>
          <div className="ui indicating progress" data-percent={this.state.value}>
            <div className="bar" style={{width:this.state.value+'%', minWidth:0}}></div>
            <div className="label">{this.renderDescription()}</div>
          </div>
          {this.props.name !== "Available" ? this.renderButtons() : ''}
        </div>
      </div>
    )
  }
});

export default Attribute;