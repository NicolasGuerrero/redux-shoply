import { add, remove } from "./actions"
import { ADD, REMOVE } from "./actionTypes";

describe('test action creators', () => {
  test('test add action creator', () => {
    let action = add('testID');
    expect(action).toEqual({ type: ADD, payload: { id: 'testID' } });
  });

  test('test remove action creator', () => {
    let action = remove('testID');
    expect(action).toEqual({ type: REMOVE, payload: { id: 'testID' } });
  });
});