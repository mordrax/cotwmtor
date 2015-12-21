import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import {connect} from 'react-redux';
import * as actions from '../../actions';

const GenderView = ({
  gender,
  onChangeGender
  }) => (
      <div className="equal width column">
        <div className="ui large buttons">
          <div className={classNames("ui labeled icon button", {active:gender === 'male'})}
               onClick={() => {onChangeGender('male');}}>
            <i className="large male icon" />
            Male
          </div>
          <div className="or"></div>
          <div className={classNames("ui labeled icon button", {active:gender === 'female'})}
               onClick={() => {onChangeGender('female')}}>
            <i className="large female icon" />
            Female
          </div>
        </div>
      </div>
    );

const Gender = connect(
  (state) => {
    debugger;
    return {
      gender: state.gender
    }
  },
  (dispatch) => {
    return {
      onChangeGender: (gender) => {
        console.log('dispatching gender change: ' + gender)
        dispatch(actions.setGender(gender));
      }
    }
  }
)(GenderView);

export default Gender;