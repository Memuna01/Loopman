import * as newsAPI from '../utils/newsAPI';
import Dispatcher from '../dispatcher/dispatcher.js';

export function getNewsSources() {
  newsAPI.getNewsSources((data) => {
    Dispatcher.dispatch({
      actionType: 'GET_NEWS_SOURCES',
      data,
    });
  });
}

export function getNewsArticles(source, option) {
  newsAPI.getNewsArticles(source, option, (data) => {
    Dispatcher.dispatch({
      actionType: 'GET_NEWS_ARTICLES',
      data,
    });
  });
}