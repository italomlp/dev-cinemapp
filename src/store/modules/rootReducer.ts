import { combineReducers } from 'redux';

export type RootReducer = {
  example: () => {};
};

export default combineReducers({
  example: () => ({}),
});
