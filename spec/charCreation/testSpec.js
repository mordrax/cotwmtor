import React from 'react';
import ReactDom from 'react-dom';
import {shallow} from 'enzyme';
import cotw from '../../client/enums/cotwContent.js';
import Gender from '../../client/charCreation/gender.jsx';

describe("<Gender>: ", () => {
  let component;
  let props = {
    gender: 'male',
    onChangeGender: () => {}
  };

  beforeEach(() => {
    spyOn(props, 'onChangeGender');
    component = shallow(<Gender {...props}/>);
  });

  it("Changes to male when clicked", () => {
    component.find('#male').simulate('click');
    expect(props.onChangeGender).toHaveBeenCalled();
  });

  it('Passing gender:female makes the female button active', () => {
    props.gender = 'female';
    component = shallow(<Gender {...props} />);
    expect(component.find('.button.female.active').length).toEqual(1);
  })
});