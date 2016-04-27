import React from 'react';
import ReactDom from 'react-dom';
import {shallow} from 'enzyme';
import Gender from '/client/charCreation/gender.js';

describe("<Building>", () => {
  let component;
  let props = {
    gender: 'male',
    onChangeGender: () => {}
  };

  beforeEach(() => {
    spyOn(props, 'onChangeGender');
    component = shallow(<Gender {...props}/>);
  });

  it("should call onChangeGender with 'male' when the Male button is clicked", () => {
    component
      .findWhere(x=>x.type() ==='div' && x.text() === 'Male')
      .simulate('click');
    expect(props.onChangeGender).toHaveBeenCalledWith('male');
  });

  it('should set the active gender to female if passed {gender:"female"}', () => {
    props.gender = 'female';
    component = shallow(<Gender {...props} />);
    expect(component.find('.button.active').text()).toEqual('Female');
  });

  it("should not set any active gender if gender isn't male or female", () => {
    props.gender = 'other';
    component = shallow(<Gender {...props} />);
    expect(component.find('.button.active').length).toEqual(0);
  })

});