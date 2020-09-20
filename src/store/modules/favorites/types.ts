import { Movie } from '../../../models/Movie';

export enum ActionTypes {
  ADD_FAVORITE = '@favorites/ADD_FAVORITE',
  REMOVE_FAVORITE = '@favorites/REMOVE_FAVORITE',
}

export type AddFavoriteAction = {
  type: ActionTypes.ADD_FAVORITE;
  payload: {
    movie: Movie;
  };
};

export type RemoveFavoriteAction = {
  type: ActionTypes.REMOVE_FAVORITE;
  payload: {
    id: string;
  };
};

export type FavoritesActionCreators = AddFavoriteAction | RemoveFavoriteAction;
