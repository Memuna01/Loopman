import axios from 'axios';

/**
* This contains two methods which make api
* calls to newsapi.org endpoints to retrieve news articles and
* sources respectively.
* @class NewsApi
*/
class NewsApi {
  /**
  * This function takes two parameters and makes a call to news api articles
  * endpoint using axios http client library.
  * @param {string} source, the news source
  * @param {string} option, the sort options.
  * @returns a promise from newsapi articles endpoint
  */
  static getNewsArticlesApi(source, option) {
    const BASE_URL = 'https://newsapi.org/v1/';
    return axios.get(`${BASE_URL}articles?source=${source}&sortBy=${option}&apiKey=${process.env.API_KEY}`);
  }

  /**
  * This function makes a call to news api sources endpoint
  * using axios http client library.
  * @returns a promise from newsapi sources endpoint
  */
  static getNewsSourcesApi() {
    return axios.get('https://newsapi.org/v1/sources');
  }
}

export default NewsApi;

