import { ADD_ITEM } from './const';
import { CHANGE_ITEM } from './const';

export function addItem(parameter) {
  console.log('set action',parameter);
  return { type: ADD_ITEM, payload:parameter };
}

export function changeItem(parameter) {
  console.log('change action',parameter);
  return { type: CHANGE_ITEM, payload:parameter };
}

// module.exports = addItem;//{addItem,changeItem};
