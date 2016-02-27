import React from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';
import {EquipmentSlots} from '/client/enums/cotwContent.js';

const ContainerView = ({children, id, onDrop, name, connectDropTarget, isOver}) => {
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

const dropTarget = DropTarget((props) => {
  console.log(`Drop: ${props.dropTargetType} for id(${props.id}) name(${props.name})`);
  return props.dropTargetType || 'abc';}, target, collect)(ContainerView);

export default Container = connect(() => { return {}}, (dispatch) => {
  return {
    onDrop : (iid, sourceCid, destCid) => {
      console.log(`OnDrop iid(${iid}) sourceCid(${sourceCid}) destCid(${destCid})`);
      if (sourceCid === destCid) {
        console.log('Dropping into the same container! Abort!');
        return;
      }
      if (_.contains(_.keys(EquipmentSlots), sourceCid))
        dispatch({type: 'PLAYER_UNEQUIP', iid, equipmentType:sourceCid});
      if (_.contains(_.keys(EquipmentSlots), destCid))
        dispatch({type: 'PLAYER_EQUIP', iid, equipmentType:destCid});

      dispatch({type: 'CONTAINER_ADD_ITEM', iid, cid: destCid});
      dispatch({type: 'CONTAINER_REMOVE_ITEM', iid, cid: sourceCid});
    }
  }
})(dropTarget);

