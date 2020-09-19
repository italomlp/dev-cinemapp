import baseApi from './baseApi';

type SearchMoviewRequest = {
  searchText: string;
};

export const searchMovie = ({ searchText }: SearchMoviewRequest) => {
  return baseApi.get('', {
    params: {
      s: searchText,
    },
  });
};
