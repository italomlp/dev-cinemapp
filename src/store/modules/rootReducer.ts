import { combineReducers } from 'redux';

import favorites, { StateType as FavoritesState } from './favorites/reducer';

export type RootReducer = {
  favorites: FavoritesState;
};

export default combineReducers<RootReducer>({
  favorites,
});
