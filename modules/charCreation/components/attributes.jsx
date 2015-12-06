import React from 'react';
import {cotw} from '../../enums/enums.jsx';

var Attributes = React.createClass({
  propTypes: {
    // called with a object specifying attributes
    onSetAttributes: React.PropTypes.func.isRequired
  },
  getInitialState() {
    return {
      attributes: {
        Available: {value: 100, name: 'Available'},
        Strength: {value: 50, name: 'Strength'},
        Intelligence: {value: 50, name: 'Intelligence'},
        Constititution: {value: 50, name: 'Constititution'},
        Dexterity: {value: 50, name: 'Dexterity'}
      },
      descriptions: {
        Available: [
          {value: 100, text: "Training is for wimps, you like pain, you like it alot!"},
          {value: 0, text: "You are at your maximum potential! Go get'em tiger!"}
        ],
        Strength: [
          {value: 100, text: "Hammers are for wimps, you hit with your FISTS!"},
          {value: 50, text: "Of average strength!"},
          {value: 0, text: "Unable to push open a unlocked door whos hinges has recently been serviced with WD40."}
        ],
        Intelligence: [
          {value: 100, text: "Smart"},
          {value: 50, text: "Smart enough to be at the peak of the standard distribution curve."},
          {value: 0, text: "Dumb"}
        ],
        Constititution: [
          {value: 50, text: "Able to outrun a hungry hippo!"},
          {
            value: 0,
            text: "You're having a BAD day, everyday! It's like you've got two kids that keep waking you up at night, EVERY night!"
          }
        ],
        Dexterity: [
          {value: 50, text: ""}
        ]
      }
    }
  },
  getDefaultProps() {
    return {}
  },
  changeAttr(attr, value) {
    var availablePoints = this.state.attributes.Available.value;
    if (availablePoints - value < 0 || availablePoints - value > 100) return;
    if (attr.value + value < 0 || attr.value + value > 100) return;

    // if adding, check there's enough available
    // if subtracting, cap available at 100
    attr.value += value;
    this.state.attributes.Available.value -= value;
    this.setState(attr);

    this.props.onSetAttributes(this.state.attributes);

    console.log(attr + " " + value);
  },
  buttons(attr) {
    return (<div className="ui buttons">
      <button className="ui icon button" onClick={this.changeAttr.bind(this, attr, -5)}><i
        className="ui icon minus"></i></button>
      <button className="ui icon button" onClick={this.changeAttr.bind(this, attr, 5)}><i className="ui icon plus"></i>
      </button>
    </div>);
  },
  renderAttribute(attr, key) {
    var buttonsHtml = attr.name !== "Available" ? this.buttons(attr) : "";
    var description = null;
    _.find(this.state.descriptions[attr.name], function (val, key) {
      if (val.value <= attr.value) {
        description = val.text;
        return val;
      }
    });

    return (
      <div className="ui segment left aligned" key={key}>
        <h4 className="ui header">{attr.name}:</h4>
        <div className="ui indicating progress" data-percent={attr.value}>
          <div className="bar" style={{width:attr.value+'%', minWidth:0}}></div>
          <div className="label">{description}</div>
        </div>
        {buttonsHtml}
      </div>
    )
  },
  render() {
    return (
      <div className="ui segments">
        {
          _.map(this.state.attributes, function (attr, i) {
            return this.renderAttribute(attr, i)
          }, this)
        }
      </div>
    )
  }
});

module.exports = {Attributes}