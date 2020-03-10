import { ADD, REMOVE } from './actionTypes';

export function add(id) {
  return {
    type: ADD,
    payload: { id: id }
  };
}

export function remove(id) {
  return {
    type: REMOVE,
    payload: { id: id }
  };
}