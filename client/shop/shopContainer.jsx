import React from 'react';

import {DragDropTypes} from '/client/enums/enums.js';
import { DropTarget } from 'react-dnd';

const Container = ({children, shop, onDrop, connectDropTarget, isOver}) => {
  return connectDropTarget(
  <div style={{
    border: isOver?'5px blue solid':''
  }}>{children}</div>
)};

const target = {
  drop(props, monitor) {
    let source = monitor.getItem();
    props.onDrop(source);
    console.log('dropping ' + source.item.name + ' into ' + props.shop);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

export default DropTarget(DragDropTypes.Item, target, collect)(Container);
