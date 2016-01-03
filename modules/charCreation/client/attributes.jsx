import React, {Component, PropTypes} from 'react';
import cotw from '../../enums/enums';
import {connect} from 'react-redux';
import actions from '../../actions';

class AttributesView extends Component {
  renderButtons(onChangeAttribute, attr) {
    return (<div className="ui buttons">
      <button className="ui icon button" onClick={() => onChangeAttribute(attr, -5)}>
        <i className="ui icon minus"/>
      </button>
      <button className="ui icon button" onClick={() => onChangeAttribute(attr, 5)}>
        <i className="ui icon plus"/>
      </button>
    </div>);
  }

  render() {
    let { attributes, onChangeAttribute } = this.props;
    let self = this;
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
                  {attribute.name !== "Available" ? self.renderButtons(onChangeAttribute, attribute.name) : ''}
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

AttributesView.PropTypes = {
  attributes: PropTypes.string,
  onChangeAttribute: PropTypes.func
}

const Attributes = connect(
  (state) => {
    return {
      attributes: state.player.attributes
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