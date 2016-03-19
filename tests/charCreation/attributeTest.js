import React from 'react';
import ReactDom from 'react-dom';
import {shallow} from 'enzyme';
import Attributes from '../../client/charCreation/attributes.jsx';

describe("<Attributes>", () => {
  let component;
  let props = {
    attributes: {},
    onChangeAttribute: () => {}
  };

  beforeEach(() => {
    spyOn(props, 'onChangeAttribute');
    component = shallow(<Attributes {...props}/>);
  });

  it("should call onChangeAttribute with ('strength', 5) when the strength is increased", () => {
    throw 'TODO'
  });

  it('should set the length of the bar based on what the attribute value is', () => {
    throw 'TODO'
  });
});