import React, {Component, PropTypes} from 'react';
import FakeComponent, {cotw} from '/client/enums/enums.jsx';
import {connect} from 'react-redux';
import actions from '/client/actions/index';


const AttributesView = ({attributes, onChangeAttribute, cotw}) => {
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

  return (
    <div>
      {
        _.map(attributes, function (attribute, i) {
          return (
            <div className="ui segments" key={i}>
              <div className="ui segment left aligned">
                <h4 className="ui header">{attribute.name}:</h4>
                <div className="ui indicating progress" data-percent={attribute.value}>
                  <div className="bar" style={{width:attribute.value+'%', minWidth:0}}></div>
                  <div className="label">{cotw.getAttributeDescription(attribute.name, attribute.value)}</div>
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