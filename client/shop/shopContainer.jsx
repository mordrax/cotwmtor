import React from 'react';
import { connect } from 'react-redux';
import {DragDropTypes} from '/client/enums/enums.js';
import { DropTarget } from 'react-dnd';

const ShopContainerView = ({children, id, onDrop, name, connectDropTarget, isOver}) => {
  return connectDropTarget(
  <div style={{
    border: isOver?'5px blue solid':''
  }}>
    <div><b>{name}</b></div>
    {children}
  </div>
)};

const target = {
  drop(props, monitor) {
    let source = monitor.getItem();
    props.onDrop(source.item.id, source.cid, props.id);
    console.log(`Drop: ${source.item.id} into ${props.id}`);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

const ShopDrop = DropTarget(DragDropTypes.Item, target, collect)(ShopContainerView);

export default ShopContainer = connect(null, (dispatch) => {
  return {
    onDrop : (iid, sourceCid, destCid) => {
      console.log(`OnDrop iid(${iid}) sourceCid(${sourceCid}) destCid(${destCid})`);
      dispatch({type: 'CONTAINER_ADD_ITEM', iid, cid: destCid});
      dispatch({type: 'CONTAINER_REMOVE_ITEM', iid, cid: sourceCid});
    }
  }
})(ShopDrop);


