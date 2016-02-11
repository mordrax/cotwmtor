import React from 'react';

const ScreenView = ({building}) => (
  <div>
    <h1>Screen view :- {building.name}</h1>
    <span className='ui text container segment'>This is a inventory screen</span>
    <div className="ui two column grid">
      <div className="column">
        <div className="ui segment">Player inventory</div>
      </div>
      <div className="column">
        <div className="ui segment">Shop inventory</div>
      </div>
    </div>
  </div>
);

export default ScreenView;