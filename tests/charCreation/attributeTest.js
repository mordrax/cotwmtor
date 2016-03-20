import React from 'react';
import ReactDom from 'react-dom';
import {shallow, mount, render} from 'enzyme';
import Attributes from '../../client/charCreation/attributes.jsx';

describe("<Attributes>", () => {
  let component;
  let props = {
    attributes       : {
      Available   : {value: 100, name: 'Available'},
      Strength    : {value: 70, name: 'Strength'},
      Intelligence: {value: 50, name: 'Intelligence'},
      Constitution: {value: 50, name: 'Constitution'},
      Dexterity   : {value: 50, name: 'Dexterity'}
    },
    onChangeAttribute: () => {}
  };

  beforeEach(() => {
    spyOn(props, 'onChangeAttribute');
    component = shallow(<Attributes {...props}/>);
  });

  it("should call onChangeAttribute with ('Strength', 5) when the strength is increased", () => {
    component.find('.test-Strength-plus').simulate('click');
    expect(props.onChangeAttribute).toHaveBeenCalledWith('Strength', 5);
  });

  it("should call onChangeAttribute with ('Constitution', -5) when the con is decreased", () => {
    component.find('.test-Constitution-minus').simulate('click');
    expect(props.onChangeAttribute).toHaveBeenCalledWith('Constitution', -5);
    expect(props.onChangeAttribute).not.toHaveBeenCalledWith('Constitution', 5);
  });

  it('should set the length of the bar based on what the attribute value is', () => {
    throw "TODO: Don't know how to check for html width."
  });

  it('should display the correct description for the Strength stat at 0', () => {
    props.attributes.Strength.value = 0;
    component = shallow(<Attributes {...props}/>);
    expect(component.find('.test-Strength-description').text()).toEqual('Unable to push open a unlocked door whos hinges has recently been serviced with WD40.');
  });

  it('should display the correct description for the Strength stat at 100', () => {
    props.attributes.Strength.value = 100;
    component = shallow(<Attributes {...props}/>);
    expect(component.find('.test-Strength-description').text()).toEqual('Hammers are for wimps!! You hit with your FISTS!');
  });
});