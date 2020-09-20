import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { Header, MoviesList } from '../../components';
import { searchMovie } from '../../services/movies';
import { Movie } from '../../models/Movie';

import { SearchContainer, Button, Input, Loading, ErrorText } from './styles';

const MoviesSearch: React.FC = () => {
  const [loadedMovies, setLoadedMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState('');

  const searchMovieOnApi = useCallback(async (search: string) => {
    try {
      setLoading(true);
      const response = await searchMovie({ searchText: search });
      if (response.data && response.data.Search) {
        const movies = response.data.Search;
        setLoadedMovies(movies);
      }
    } catch (err) {
      console.log('error', err);
      setError(
        'Ocorreu um erro ao carregar os filmes :(\nPor favor, tente novamente em instantes',
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const onChangeInput = useCallback((text: string) => {
    setSearchText(text);
  }, []);

  return (
    <View>
      <Header
        title="Cinema App"
        description="Bem-vindo ao mundo espetacular do cinema"
      />
      <MoviesList
        movies={loadedMovies}
        emptyText="Não há filmes carregados ainda. Faça sua busca no campo acima."
        topComponent={
          <>
            <SearchContainer>
              <Input
                placeholder="Digite aqui sua busca"
                value={searchText}
                onChangeText={onChangeInput}
              />
              <Button
                title="Buscar"
                onPress={() => searchMovieOnApi(searchText)}
              />
            </SearchContainer>
            {!!error && <ErrorText>{error}</ErrorText>}
            {loading && <Loading />}
          </>
        }
      />
    </View>
  );
};

export default MoviesSearch;
