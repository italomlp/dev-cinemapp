import axios from 'axios';

const API_KEY = '925eba28';

const baseApi = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=${API_KEY}&`,
});

export default baseApi;
