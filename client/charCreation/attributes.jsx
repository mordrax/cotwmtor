import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import actions from '../../client/actions/index';

const Attributes = ({attributes, onChangeAttribute}) => (
  <div>
    {
      _.map(attributes, function (attribute, i) {
        let attrName = attribute.name;
        return (
          <div className="ui segments" key={i}>
            <div className="ui segment left aligned">
              <h4 className="ui header">{attrName}:</h4>
              <div className="ui indicating progress" data-percent={attribute.value}>
                <div className={`bar test-${attrName}-bar`} style={{width:attribute.value+'%', minWidth:0}}></div>
                <div className={`label test-${attrName}-description`}>{getAttributeDescription(attrName, attribute.value)}</div>
              </div>
              {attrName !== "Available" ?
                buttons(onChangeAttribute, attrName) : ''}
            </div>
          </div>
        )
      })
    }
  </div>
);

const AttributeDescriptions = {
  Available   : [
    {value: 0, text: "You are at your maximum potential! Go get'em tiger!"},
    {value: 100, text: "Training is for wimps, you like pain, you like it alot!"}
  ],
  Strength    : [
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
  Dexterity   : [
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

let buttons = (onClick, attrName) => {
  return (
    <div className="ui buttons">
      <button className={`ui icon button test-${attrName}-minus` } onClick={() => onClick(attrName, -5)}>
        <i className="ui icon minus"/>
      </button>
      <button className={`ui icon button test-${attrName}-plus`} onClick={() => onClick(attrName, 5)}>
        <i className="ui icon plus"/>
      </button>
    </div>);
};

export default Attributes;