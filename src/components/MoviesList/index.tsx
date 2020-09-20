import React from 'react';
import { Movie } from '../../models/Movie';
import MovieCard from '../MovieCard';

import { StyledFlatList } from './styles';

type Props = {
  movies: Movie[];
  topComponent?: React.ReactElement;
};

const MoviesList: React.FC<Props> = ({
  movies,
  topComponent: TopComponent,
}) => {
  return (
    <StyledFlatList
      data={movies}
      ListHeaderComponent={TopComponent}
      keyExtractor={(movie) => movie.imdbID}
      renderItem={({ item: movie }) => <MovieCard movie={movie} />}
    />
  );
};

export default MoviesList;
