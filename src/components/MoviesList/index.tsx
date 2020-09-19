import React from 'react';
import { Movie } from '../../models/Movie';
import MovieCard from '../MovieCard';

import { StyledFlatList } from './styles';

type Props = {
  movies: Movie[];
};

const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
    <StyledFlatList
      data={movies}
      keyExtractor={(movie) => movie.imdbID}
      renderItem={({ item: movie }) => <MovieCard movie={movie} />}
    />
  );
};

export default MoviesList;
