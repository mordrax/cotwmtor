import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import {DragDropTypes} from '/client/enums/enums.js';
import _ from 'lodash';

const ItemView = ({ cid, item, type, connectDragSource, isDragging }) => {

  return connectDragSource(
  <div className="ui item" style={{
    opacity: isDragging ? 0.5: 1,
    cursor:'move',
    width: '32px',
    height: '64px'
  }}>
    <div className="image">
      <i className={`cotwItem ${item.base.css}`} alt=""/>
    </div>
    <div className="content">
      <a className="header">{type}</a>
      <div className="meta">
        <span className="date" />
      </div>
      <div className="description" style={{maxWidth:'7em'}}>
        {item.base.name}
      </div>
    </div>
  </div>
)};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const source = {
  beginDrag(props) {
    return _.extend({}, props);
  }
};

export default DragSource(DragDropTypes.Item, source, collect)(ItemView);