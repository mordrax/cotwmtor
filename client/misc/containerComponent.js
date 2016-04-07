import React, {PropTypes as Type} from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';

import {EquipmentSlots} from '../../core/cotwContent.js';
import Item from './../shop/itemComponent.js';
import actions from '../../actions/index.js';

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

const Container = connect(
  null,
  (dispatch, getState) => {
    return {
      /**
       *
       * @param source - {dragTargetType: "Bracers", cid: "bracers", item: Object}
       * @param dest - {dropTargetType: Array[16], id: "7", type: "Shop", items: Array[10]}
       */
      onDrop: (source, dest) => {
        let destItem = dest.containerItem;
        let destCid = dest.id || destItem.cid;

        if (dest.type === 'Pack') {
          // if container's an item, make sure it fits (weight/bulk)
          let destWeight = _.reduce(dest.items, (sum, i) => sum + i.base.weight, 0);
          let destNewWeight = (destWeight + (source.item.weight || source.item.base.weight));
          if (dest.pack.base.weightCap < destNewWeight) {
            console.warn(`Too Heavy! ${source.item.id} has weight of ${source.item.base.weight} which is too heavy for ${dest.pack.id}, current weight ${destWeight}/${dest.pack.base.weight}`);
            return;
          }

          dispatch(actions.updateItem(dest.pack.id, destNewWeight));
        } else if (dest.type === 'Equipment' && dest.items[0]) {
          // if equipment slot already occupied, prevent drop
          console.warn(`Item already equipped! ${source.item.id} cannot be equipped because there's already something there.`);
          return;
        }

        console.log(`OnDrop iid(${source.id}) sourceCid(${source.cid}) destCid(${destCid})`);
        if (source.cid === destCid) {
          console.log('Dropping into the same container! Abort!');
          return;
        }

        // add item to equipment
        if (_.contains(_.keys(EquipmentSlots), source.cid))
          dispatch(actions.unequipItem(source.cid));
        if (_.contains(_.keys(EquipmentSlots), destCid))
          dispatch(actions.equipItem(destCid, source.item.id));

        // add item to containers
        dispatch(actions.addToContainer(destCid, source.item.id));
        dispatch(actions.removeFromContainer(source.cid, source.item.id));
      }
    }
  })(dropTarget);

const context = DragDropContext(HTML5Backend)(Container);

export default context;
