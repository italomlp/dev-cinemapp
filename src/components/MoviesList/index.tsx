import React from 'react';
import { Movie } from '../../models/Movie';
import MovieCard from '../MovieCard';

import { StyledFlatList, EmptyContainer, EmptyText } from './styles';

type Props = {
  movies: Movie[];
  topComponent?: React.ReactElement;
  emptyText?: string;
};

const MoviesList: React.FC<Props> = ({
  movies,
  topComponent: TopComponent,
  emptyText,
}) => {
  return (
    <StyledFlatList
      data={movies}
      ListEmptyComponent={
        emptyText ? (
          <EmptyContainer>
            <EmptyText>{emptyText}</EmptyText>
          </EmptyContainer>
        ) : undefined
      }
      ListHeaderComponent={TopComponent}
      keyExtractor={(movie) => movie.imdbID}
      renderItem={({ item: movie }) => <MovieCard movie={movie} />}
    />
  );
};

export default MoviesList;
