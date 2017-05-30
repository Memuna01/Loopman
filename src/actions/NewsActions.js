import NewsApi from '../utils/NewsApi';
import Dispatcher from '../dispatcher/Dispatcher';
import newsConstants from '../constants/newsConstants';


/**
* This class contains two static functions: getNewsArticles and
* getNewsSources.
* @class NewsActions
*/
class NewsActions {
  /**
  * This function fetches news sources from the news api
  * then dispatches the response received to the dispatcher
  * @static
  * @memberOf NewsActions
  * @returns {object} a dispatcher object.
  */
  static getNewsSources() {
    const news = NewsApi.getNewsSourcesApi();
    return news.then((response) => {
      Dispatcher.dispatch({
        actionType: newsConstants.GET_NEWS_SOURCES,
        sources: response.data.sources,
      });
    }).catch(error => error);
  }

  /**
  * This function takes 2 parameters and fetches news headlines
  * from the news api then dispatches the response received to the dispatcher
  * @static
  * @memberOf NewsActions
  * @param {string} source, the news source
  * @param {string} option, the sort option for that source
  * @returns {object} a dispatcher object.
  */
  static getNewsArticles(source, option) {
    const news = NewsApi.getNewsArticlesApi(source, option);
    return news.then((response) => {
      Dispatcher.dispatch({
        actionType: newsConstants.GET_NEWS_ARTICLES,
        headlines: response.data.articles,
        sourceName: response.data.source,
      });
    }).catch(error => error);
  }
}
export default NewsActions;
