import { ActionTypes, FavoritesActionCreators } from './types';
import { Movie } from '../../../models/Movie';

export function addFavorite(movie: Movie): FavoritesActionCreators {
  return {
    type: ActionTypes.ADD_FAVORITE,
    payload: { movie },
  };
}

export function removeFavorite(id: string): FavoritesActionCreators {
  return {
    type: ActionTypes.REMOVE_FAVORITE,
    payload: { id },
  };
}
