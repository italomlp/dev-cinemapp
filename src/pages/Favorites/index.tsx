import React from 'react';
import { SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import { Header, MoviesList } from '../../components';
import { RootReducer } from '../../store/modules/rootReducer';

const Favorites: React.FC = () => {
  const favorites = useSelector((state: RootReducer) => state.favorites.movies);

  return (
    <SafeAreaView>
      <Header title="Favoritos" description="Veja aqui seus filmes favoritos" />
      <MoviesList
        movies={favorites}
        emptyText="Não há filmes favoritos ainda. Adicione favoritos na página de busca."
      />
    </SafeAreaView>
  );
};

export default Favorites;
