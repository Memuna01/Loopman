import axios from 'axios';

export function getNewsArticlesApi(source, option, callback) {
  const url = `https://newsapi.org/v1/articles?source=${source}&sortBy=${option}&apiKey=213327409d384371851777e7c7f78dfe`;
  axios.get(url).then(response => callback(response.data));
}

export function getNewsSourcesApi(callback) {
  // window.mo = function getNewsSources(callback){
  const url = 'https://newsapi.org/v1/sources';
  axios.get(url).then(response => callback(response.data.sources));
}
