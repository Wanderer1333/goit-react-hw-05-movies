import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '19c3c1131366dcbffe75fc92ac012355';

export const getMovieTrends = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
    );
    return data.results;
  } catch (error) {
    throw new Error('Ooops Error. No movies to display');
  }
};

export const getMoviesForQuery = async (query, page) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
    );
    return data.results;
  } catch (error) {
    throw new Error('Ooops Error.');
  }
};

export const getMovieDetails = async moviesId => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}movie/${moviesId}?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    throw new Error('Ooops Error. No details');
  }
};

export const getMovieCredits = async moviesId => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}movie/${moviesId}/credits?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    throw new Error('Ooops Error.');
  }
};

export const getMovieReviews = async moviesId => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}movie/${moviesId}/reviews?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    throw new Error('Ooops Error. ');
  }
};
