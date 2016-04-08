import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '/actions/index.js';
import * as cotw from '/core/cotwContent.js';

export const ComponentName = ({}) => (
  <div className="ComponentName-component">

  </div>
);

ComponentName.PropTypes = {
  //React.PropTypes.string.isRequired,
  //React.PropTypes.func.isRequired,
  //React.PropTypes.object.isRequired,
  //React.PropTypes.number.isRequired
};

export const mapState = state => {
  return {}
};

export const mapDispatch = dispatch => {
  return {}
};

export default connect(
  mapState,
  mapDispatch)(ComponentName);