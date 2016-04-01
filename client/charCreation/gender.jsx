import React, { Component, PropTypes } from 'react';
import classNames from '../../node_modules/classnames/bind';
import {connect} from 'react-redux';
import actions from '../../actions/index.js';

const Gender = ({
  gender,
  onChangeGender
  }) => (
  <div className="equal width column">
    <div className="ui large buttons">
      <div className={classNames("ui labeled icon button", {active:gender === 'male'})}
           onClick={() => {onChangeGender('male');}}>
        <i className="large male icon"/>
        Male
      </div>
      <div className="or"></div>
      <div className={classNames("ui labeled icon button", {active:gender === 'female'})}
           onClick={() => {onChangeGender('female')}}>
        <i className="large female icon"/>
        Female
      </div>
    </div>
  </div>
);

Gender.propTypes = {
  gender: PropTypes.string.isRequired,
  onChangeGender: PropTypes.func.isRequired
};

export default Gender;