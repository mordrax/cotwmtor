import React from 'react';
import ReactDom from 'react-dom';
import {shallow} from 'enzyme';
import Map, {CalculatePathRotation} from '/client/main/mapComponent.jsx';
import * as cotw from '/core/cotwContent.js';
import * as map from '/core/maps.js';

describe("<Map>", () => {
  let component;
  let props = {};

  it('should draw tiles', () => {
    props.map = [[{
      tile : cotw.ASCIITiles['='],
      coord: [1, 1]
    }]];
    component = shallow(<Map {...props}/>);
    expect(component.find('.Crop').length).toEqual(1);
  });

  it('should draw buildings', () => {
    props.map = [[{
      buildingType   : cotw.BuildingTypes.StrawHouse_EF,
      buildingTopLeft: true,
      coord          : [1, 1]
    }]];
    component = shallow(<Map {...props}/>);
    expect(component.find('.building').length).toEqual(1);
  });

  it('should rotate paths based on neighbouring tiles', () => {
    let asciiMap = [
      '=.=',
      '.;=',
      '==='
    ];
    props.map = map.generateArea(asciiMap);

    expect(CalculatePathRotation(props.map, [1,1], 'Path')).toEqual(90);
  });

  it('should rotate rocks based on neighbouring tiles', () => {
    let asciiMap = [
      '=^=',
      '=_^',
      '==='
    ];
    props.map = map.generateArea(asciiMap);

    expect(CalculatePathRotation(props.map, [1,1], 'Rock')).toEqual(180);
  });


});