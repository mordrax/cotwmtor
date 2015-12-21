import React, {Component, PropTypes} from 'react';
import cotw from '../../enums/enums.jsx';
import {connect} from 'react-redux';

const getAttributeDescription = (attr, attributes) => {
  //_.find(self.props.descriptions, function (desc) {
  //  return self.state.value <= desc.value;
  //}).text
  return ''
};

class AttributesView extends Component {
  renderButtons() {
    return (<div className="ui buttons">
      <button className="ui icon button" onClick={this.changeAttr.bind(this, -5)}>
        <i className="ui icon minus"/>
      </button>
      <button className="ui icon button" onClick={this.changeAttr.bind(this, 5)}>
        <i className="ui icon plus"/>
      </button>
    </div>);
  }

  render() {
    let { attributes } = this.props;
    return (
      <div>
        {
          _.map(attributes, function (attribute) {
            debugger;
            return (
              <div className="ui segments">
                <div className="ui segment left aligned">
                  <h4 className="ui header">{attribute.name}:</h4>
                  <div className="ui indicating progress" data-percent={attribute.value}>
                    <div className="bar" style={{width:attribute.value+'%', minWidth:0}}></div>
                    <div className="label">{getAttributeDescription(attribute, attributes)}</div>
                  </div>
                  {attribute.name !== "Available" ? this.renderButtons() : ''}
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
      attributes: state.attributes
    }
  },
  (dispatch) => {
    return {
      onChangeAttribute: (attr, val) => {
        dispatch(changeAttribute(attr, val));
        //var availablePoints = this.state.attributes.Available.value;
        //
        //// if adding, check there's enough available
        //// if subtracting, cap available at 100
        //if (availablePoints - value < 0 || availablePoints - value > 100) return;
        //if (attr.value + value < 0 || attr.value + value > 100) return;
        //
        //attr.value += value;
        //this.state.attributes.Available.value -= value;
        //this.setState(attr);
        //
        //this.props.onSetAttribute(this.state.attributes);
        //
        console.err('TODO: fix attributes!' + attr + " " + val);
      }
    }
  }
)(AttributesView);

export default Attributes;