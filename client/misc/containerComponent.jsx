import React, {PropTypes as Type} from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';

import {EquipmentSlotToItemType} from '../../core/cotwContent.js';
import Item from './../shop/itemComponent.js';
import * as actions from '../../actions/index.js';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

export const ContainerView = ({id, items, isOver}) => {
  return (
    <div style={{  }}>
      <div className="ui grid" style={{border: isOver?'2px blue solid':'2px black dashed', minHeight: '50px', minWidth:'50px'}}>
        {
          _.map(items, (item) => {
            return item && <Item dragTargetType={item.base.type} cid={id} item={item} key={item.id}/>;
          })
        }
      </div>
    </div>
  )
};

ContainerView.propTypes = {
  id: Type.string.isRequired,
  items: Type.array.isRequired,
  isOver: Type.bool.isRequired
};

const target = {
  drop(props, monitor) {
    let source = monitor.getItem();
    props.onDrop(source, props);
    //props.dispatchAction(props.onDrop(source.item.iid || 'hi'));
    console.log(`Drop - Source(${source.item.id}) into ${props.id} belonging to (${props.item && props.item.id})`);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver           : monitor.isOver()
  };
}

const ContainerViewDroppable = ({id, items, connectDropTarget, isOver}) => {
  return connectDropTarget(
    <div>
      <ContainerView
        id={id}
        items={items}
        isOver={isOver}/>
    </div>
  )
};

const dropTarget = DropTarget(
  ({dropTargetType}) => dropTargetType,
  target,
  collect
)(ContainerViewDroppable);

export const mapDispatch = (dispatch) => {
  return {
    /**
     *
     * @param source - {dragTargetType: "Bracers", cid: "bracers", item: Object}
     * @param dest - {dropTargetType: Array[16], id: "7", type: "Shop", items: Array[10]}
     */
    onDrop: (source, dest) => {
      dispatch(actions.moveItem(source.item.id, source.cid, dest.id));
    }
  }
};

const Container = connect(
  null,
  mapDispatch)(dropTarget);

const context = DragDropContext(HTML5Backend)(Container);

export default context;
