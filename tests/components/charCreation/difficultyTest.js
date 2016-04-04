import React from 'react';
import ReactDom from 'react-dom';
import {shallow} from 'enzyme';
import GameDifficulty, {DifficultyLevel} from '/client/charCreation/gameDifficulty.jsx';

describe("<GameDifficulty>: ", () => {
  let component;
  let props = {
    difficulty   : DifficultyLevel.Difficult,
    setDifficulty: () => {},
  };

  beforeEach(() => {
    spyOn(props, 'setDifficulty');
    component = shallow(<GameDifficulty {...props}/>);
  });

  it("should highlight the correct difficulty level for all 4 levels {difficulty:1-4}", () => {
    _.forEach([
      {lvl: DifficultyLevel.Easy, text: 'Easy'},
      {lvl: DifficultyLevel.Intermediate, text: 'Intermediate'},
      {lvl: DifficultyLevel.Difficult, text: 'Difficult'},
      {lvl: DifficultyLevel.ExpertsOnly, text: 'Experts Only'}
    ], testcase => {
      props.difficulty = testcase.lvl;
      component = shallow(<GameDifficulty {...props} />);

      expect(component.find('div.active').text()).toEqual(testcase.text);
      expect(component.find('div.active').text()).not.toEqual('Gibberish');
    })
  });

  it('should call setDifficulty with Difficult on click', () => {
    component
      .findWhere(x=>x.type()==='div' && x.text()==='Intermediate')
      .simulate('click');
    expect(props.setDifficulty).toHaveBeenCalledWith(DifficultyLevel.Intermediate);
    expect(props.setDifficulty).not.toHaveBeenCalledWith(DifficultyLevel.Easy);
  });
});