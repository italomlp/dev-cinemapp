import React from 'react';
import { View } from 'react-native';
import { Movie } from '../../models/Movie';
import MovieCard from '../MovieCard';

// import { Container } from './styles';

type Props = {
  movies: Movie[];
};

const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
    <View>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.imdbID} />
      ))}
    </View>
  );
};

export default MoviesList;
