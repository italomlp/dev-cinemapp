import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Header, MoviesList } from '../../components';
import { searchMovie } from '../../services/movies';
import { Movie } from '../../models/Movie';

// import { Container } from './styles';

const MoviesSearch: React.FC = () => {
  const [loadedMovies, setLoadedMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

  const searchMovieOnApi = useCallback(async (search: string) => {
    try {
      setLoading(true);
      const response = await searchMovie({ searchText: search });
      if (response.data && response.data.Search) {
        const movies = response.data.Search;
        setLoadedMovies(movies);
      }
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // searchMovieOnApi('batman');
  }, []);

  return (
    <View>
      <Header title="Filmes" />
      <MoviesList movies={loadedMovies} />
    </View>
  );
};

export default MoviesSearch;
