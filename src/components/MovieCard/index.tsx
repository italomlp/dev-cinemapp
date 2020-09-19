import React from 'react';

import { Movie } from '../../models/Movie';

import {
  Container,
  TextContainer,
  Title,
  Image,
  ImageContainer,
  Year,
  FavoriteButton,
  FavoriteContainer,
  FavoriteIcon,
} from './styles';

type Props = {
  movie: Movie;
  isFavorite?: boolean;
};

const MovieCard: React.FC<Props> = ({ movie, isFavorite }) => {
  return (
    <Container>
      <ImageContainer>
        <Image source={{ uri: movie.Poster }} />
      </ImageContainer>
      <TextContainer>
        <Title>{movie.Title}</Title>
        <Year>{movie.Year}</Year>
      </TextContainer>
      <FavoriteContainer>
        <FavoriteButton>
          <FavoriteIcon name={isFavorite ? 'heart' : 'heart-outline'} />
        </FavoriteButton>
      </FavoriteContainer>
    </Container>
  );
};

export default MovieCard;
