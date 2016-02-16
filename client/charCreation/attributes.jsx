import React, {Component, PropTypes} from 'react';
import {cotw} from '/client/enums/enums.js';
import {connect} from 'react-redux';
import actions from '/client/actions/index';

const AttributesView = ({attributes, onChangeAttribute, cotw}) => (
  <div>
    {
      _.map(attributes, function (attribute, i) {
        return (
          <div className="ui segments" key={i}>
            <div className="ui segment left aligned">
              <h4 className="ui header">{attribute.name}:</h4>
              <div className="ui indicating progress" data-percent={attribute.value}>
                <div className="bar" style={{width:attribute.value+'%', minWidth:0}}></div>
                <div className="label">{getAttributeDescription(attribute.name, attribute.value)}</div>
              </div>
              {attribute.name !== "Available" ?
                buttons(onChangeAttribute, attribute.name) : ''}
            </div>
          </div>
        )
      })
    }
  </div>
);

const AttributeDescriptions = {
  Available: [
    {value: 0, text: "You are at your maximum potential! Go get'em tiger!"},
    {value: 100, text: "Training is for wimps, you like pain, you like it alot!"}
  ],
  Strength: [
    {value: 0, text: "Unable to push open a unlocked door whos hinges has recently been serviced with WD40."},
    {value: 50, text: "Of average strength!"},
    {value: 100, text: "Hammers are for wimps!! You hit with your FISTS!"}
  ],
  Intelligence: [
    {value: 0, text: "Dumb"},
    {value: 50, text: "Smart enough to be at the peak of the standard distribution curve."},
    {value: 100, text: "Smart"}
  ],
  Constitution: [
    {value: 0, text: "You're having a BAD day, everyday! It's like you've got two kids that keep waking you up at night, EVERY night!"},
    {value: 50, text: "Able to outrun a hungry hippo!"}
  ],
  Dexterity: [
    {value: 50, text: ""}
  ]
};

/**
 * getAttributeDescription('Strength', 45)
 * @returns the description for a strength of 45.
 */
const getAttributeDescription = (name, value) => {
  return (_.find(AttributeDescriptions[name], function (desc) {
      return value <= desc.value;
    }) || {}).text || '';
};

let buttons = (onClick, attr) => {
  return (<div className="ui buttons">
    <button className="ui icon button" onClick={() => onClick(attr, -5)}>
      <i className="ui icon minus"/>
    </button>
    <button className="ui icon button" onClick={() => onClick(attr, 5)}>
      <i className="ui icon plus"/>
    </button>
  </div>);
};

const Attributes = connect(
  (state) => {
    return {
      attributes: state.player.attributes,
      cotw
    }
  },
  (dispatch) => {
    return {
      onChangeAttribute: (attr, val) => {
        dispatch(actions.setAttribute(attr, val));
      }
    }
  }
)(AttributesView);

export default Attributes;