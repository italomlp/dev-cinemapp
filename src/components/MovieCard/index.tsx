import React from 'react';
import { Text, View } from 'react-native';
import { Movie } from '../../models/Movie';

// import { Container } from './styles';

type Props = {
  movie: Movie;
};

const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <View>
      <Text>{movie.Title}</Text>
    </View>
  );
};

export default MovieCard;
