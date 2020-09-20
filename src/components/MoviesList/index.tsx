import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatListProps } from 'react-native';

import { Movie } from '../../models/Movie';

import { RootReducer } from '../../store/modules/rootReducer';
import {
  addFavorite,
  removeFavorite,
} from '../../store/modules/favorites/actions';

import MovieCard from '../MovieCard';

import { StyledFlatList, EmptyContainer, EmptyText } from './styles';

type MovieWithFavoriteFlag = Movie & {
  isFavorite: boolean;
};

type Props = {
  movies: Movie[];
  topComponent?: React.ReactElement;
  emptyText?: string;
} & Omit<
  Partial<FlatListProps<MovieWithFavoriteFlag>>,
  | 'data'
  | 'ListEmptyComponent'
  | 'ListHeaderComponent'
  | 'keyExtractor'
  | 'renderItem'
>;

const MoviesList: React.FC<Props> = ({
  movies,
  topComponent: TopComponent,
  emptyText,
  ...rest
}) => {
  const favorites = useSelector((state: RootReducer) => state.favorites.movies);
  const dispatch = useDispatch();

  const toggleFavoriteMovie = useCallback(
    (movie: Movie) => {
      if (
        favorites.find((favoriteMovie) => favoriteMovie.imdbID === movie.imdbID)
      ) {
        dispatch(removeFavorite(movie.imdbID));
      } else {
        dispatch(addFavorite(movie));
      }
    },
    [favorites, dispatch],
  );

  const moviesWithFavoritesPopulated = useMemo(
    () =>
      movies.map((movie) => ({
        ...movie,
        isFavorite: !!favorites.find((m) => m.imdbID === movie.imdbID),
      })),
    [favorites, movies],
  );

  return (
    <StyledFlatList
      data={moviesWithFavoritesPopulated}
      ListEmptyComponent={
        emptyText ? (
          <EmptyContainer>
            <EmptyText>{emptyText}</EmptyText>
          </EmptyContainer>
        ) : undefined
      }
      ListHeaderComponent={TopComponent}
      keyExtractor={(movie) => movie.imdbID}
      renderItem={({ item: movie }) => (
        <MovieCard
          movie={movie}
          isFavorite={movie.isFavorite}
          onClickFavorite={toggleFavoriteMovie}
        />
      )}
      {...rest}
    />
  );
};

export default MoviesList;
