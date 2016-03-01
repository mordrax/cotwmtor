import React from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';
import {EquipmentSlots} from '/client/enums/cotwContent.js';
import Item from './item.jsx';

const ContainerView = ({dropTargetType, id, type, name, pack, items, connectDropTarget, isOver}) => {

  return connectDropTarget(
    <div style={{  }}>
      {
        type !== 'Equipment' ?
          <div className="ui block header">
            {type} {type === 'Pack' ?
            `[Weight:${_.reduce(items, (sum, i) => sum + i.base.weight, 0)}/${pack.base.weightCap} |
            Bulk: ${_.reduce(items, (sum, i) => sum + i.base.bulk, 0)}/${pack.base.bulkCap}]` : ''}
          </div> : <div><b>{name}</b></div>
      }

      <div className="ui grid" style={{border: isOver?'2px blue solid':'2px black dashed', minHeight: '50px', minWidth:'50px'}}>
        {
          _.map(items, (item) => {
            return item && <Item dragTargetType={item.type} cid={id} item={item} key={item.id}/>;
          })
        }
      </div>
    </div>
  )
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

const dropTarget = DropTarget((props) => {
  if (!props.dropTargetType || !props.id)
    console.error(`DropTarget - targetType(${props.dropTargetType}) dropping into id(${props.id}) name(${props.name || ''})`);
  return props.dropTargetType || 'abc';
}, target, collect)(ContainerView);


export default Container = connect(
  (state) => {
    return {}
  },
  (dispatch, getState) => {
    return {
      /**
       *
       * @param source - {dragTargetType: "Bracers", cid: "bracers", item: Object}
       * @param dest - {dropTargetType: Array[16], id: "7", type: "Shop", items: Array[10]}
       *
       */
      onDrop: (source, dest) => {
        let destItem = dest.containerItem;
        let destCid = dest.id || destItem.cid;

        if (dest.type === 'Pack') {
          // if container's an item, make sure it fits (weight/bulk)
          let destWeight = _.reduce(dest.items, (sum, i) => sum + i.base.weight, 0);
          let destNewWeight = (destWeight + (source.item.weight || source.item.base.weight));
          if (dest.pack.base.weightCap < destNewWeight) {
            console.warn(`Too Heavy! ${source.item.id} has weight of ${source.item.base.weight} which is too heavy for ${dest.pack.id}, current weight ${destWeight}/${dest.pack.base.weight}`)
          }

          dispatch({type: 'UPDATE_ITEM', iid: dest.pack.id, weight: destNewWeight});
          //dispatch({type: 'ADD_ITEM_WEIGHT', iid: destItem.id, weight: source.item.weight || source.item.base.weight});
          /*if (dest && (dest.bulk + source.item.bulk || source.item.base.bulk) > dest.base.bulk) {
           console.warn(`Too Heavy! ${source.item.id} has bulk of ${source.item.bulk} which is too heavy for ${dest.id}, current bulk ${dest.bulk}/${dest.base.bulk}`)
           return;
           }*/
        }

        console.log(`OnDrop iid(${source.id}) sourceCid(${source.cid}) destCid(${destCid})`);
        if (source.cid === destCid) {
          console.log('Dropping into the same container! Abort!');
          return;
        }

        // add item to equipment
        if (_.contains(_.keys(EquipmentSlots), source.cid))
          dispatch({
            type         : 'PLAYER_UNEQUIP',
            iid          : source.item.id,
            equipmentType: source.cid
          });
        if (_.contains(_.keys(EquipmentSlots), destCid))
          dispatch({type: 'PLAYER_EQUIP', iid: source.item.id, equipmentType: destCid});

        // add item to containers
        dispatch({type: 'CONTAINER_ADD_ITEM', iid: source.item.id, cid: destCid});
        dispatch({type: 'CONTAINER_REMOVE_ITEM', iid: source.item.id, cid: source.cid});
      }
    }
  })(dropTarget);

