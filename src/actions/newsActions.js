import * as newsAPI from '../utils/newsAPI';
import Dispatcher from '../dispatcher/dispatcher.js';
import newsConstants from '../constants/newsConstants';

export function getNewsSources() {
  newsAPI.getNewsSourcesApi((data) => {
    Dispatcher.dispatch({
      actionType: newsConstants.GET_NEWS_SOURCES,
      data,
    });
  });
}

export function getNewsArticles(source, option) {
  newsAPI.getNewsArticlesApi(source, option, (data) => {
    Dispatcher.dispatch({
      actionType: newsConstants.GET_NEWS_ARTICLES,
      data,
    });
  });
}
