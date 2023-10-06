import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = 'cda787ff65897c02dfdb871d24f46952';

export async function fetchTopMovies() {
  const end_point = '/trending/movie/week';
  // https://api.themoviedb.org/3/trending/all
  const par = new URLSearchParams({
    api_key: API_KEY,
    // language: 'uk-Uk',
  });

  const url = `${BASE_URL}${end_point}?${par}`;

  const responce = await axios.get(url);
  return responce.data;
}

export async function fetchMovies(query = '', page = 1) {
  const end_point = '/search/movie';

  const par = new URLSearchParams({
    api_key: API_KEY,
    query: query,
    // language: 'uk-Uk',
    page: page,
  });

  const url = `${BASE_URL}${end_point}?${par}`;

  console.log(url);

  const responce = await axios.get(url);
  return responce.data;
}

export async function fetchMovieById(id = '') {
  // https://api.themoviedb.org/3/movie/157336?api_key=cda787ff65897c02dfdb871d24f46952&append_to_response=videos,images

  const end_point = `/movie/${id}`;

  const par = new URLSearchParams({
    api_key: API_KEY,
    // language: 'uk-Uk',
  });

  const url = `${BASE_URL}${end_point}?${par}`;

  const responce = await axios.get(url);
  return responce.data;
}

export async function fetchMovieCreditsById(id = '') {
  // https://api.themoviedb.org/3/movie/157336?api_key=cda787ff65897c02dfdb871d24f46952&append_to_response=videos,images

  const end_point = `/movie/${id}/credits`;

  const par = new URLSearchParams({
    api_key: API_KEY,
    // language: 'uk-Uk',
  });

  const url = `${BASE_URL}${end_point}?${par}`;

  const responce = await axios.get(url);
  return responce.data;
}

export async function fetchMovieReviewsById(id = '') {
  const end_point = `/movie/${id}/reviews`;

  const par = new URLSearchParams({
    api_key: API_KEY,
  });

  const url = `${BASE_URL}${end_point}?${par}`;

  const responce = await axios.get(url);
  return responce.data;
}
