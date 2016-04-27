import React, {PropTypes as Type} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '/actions/index.js';
import * as cotw from '/core/cotwContent.js';
import Container from '/client/misc/containerComponent.js';

export const Pack = ({items, containerId, pack}) => (
  <div className="Pack-component">
    <div className="ui block header">
      <span>Pack: {!pack ? '(No pack equipped!)' : ''}</span>
      <span className="test-weight-bulk">
        {
          pack ?
            `[Weight:${_.reduce(items, (sum, i) => sum + i.base.weight, 0)}/${pack.base.weightCap} |
      Bulk: ${_.reduce(items, (sum, i) => sum + i.base.bulk, 0)}/${pack.base.bulkCap}]` :
            ''
        }
      </span>
    </div>
    {
      pack ?
        <Container dropTargetType={_.values(cotw.ItemType)} id={containerId} pack={pack} items={items}/> :
        ''
    }
  </div>
);

Pack.propTypes = {
  items      : Type.array.isRequired,
  containerId: Type.string,
  pack       : Type.object
};

export const mapState = state => {
  let pack = state.items[state.player.equipment['pack']];
  let items = pack && state.containers[pack.id] && _.map(state.containers[pack.id], (isExists, iid) => state.items[iid]);

  return {
    containerId: pack && pack.id || null,
    items      : items || [],
    pack       : pack || null
  }
};

export const mapDispatch = dispatch => {
  return {}
};

export default connect(
  mapState,
  mapDispatch)(Pack);