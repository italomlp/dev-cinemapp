import produce from 'immer';

import { FavoritesActionCreators, ActionTypes } from './types';
import { Movie } from '../../../models/Movie';

export type StateType = {
  readonly movies: Movie[];
};

const INITIAL_STATE: StateType = {
  movies: [],
};

export default function loading(
  state = INITIAL_STATE,
  action: FavoritesActionCreators,
): StateType {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.ADD_FAVORITE: {
        const movieToAdd = action.payload.movie;
        if (!draft.movies.find((movie) => movie.imdbID === movieToAdd.imdbID)) {
          draft.movies.push(movieToAdd);
        }
        return draft;
      }
      case ActionTypes.REMOVE_FAVORITE: {
        const { id } = action.payload;
        const movieIndex = draft.movies.findIndex(
          (movie) => movie.imdbID === id,
        );
        if (movieIndex >= 0) {
          draft.movies.splice(movieIndex, 1);
        }
        return draft;
      }
      default:
        return draft;
    }
  });
}
