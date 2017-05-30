import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/Dispatcher';
import newsConstants from '../constants/newsConstants';

/**
* This is the store for news sources, it is registered to the dispatcher,
* and receives a payload from it which it makes available to the view
* component, SearchLoopman.js
* @class SourcesStore
* @extends EventEmitter
*/
class SourcesStore extends EventEmitter {
  constructor() {
    super();
    this.sources = [];
  }

 /**
  * This function returns the news sources.
  * @memberOf SourcesStore
  * @returns news sources
  */
  fetchNewsSources() {
    return this.sources;
  }

  /**
  * This function instantiates an event listener which the view invokes when
  * there is a change in state. It requires a:
  * @param {function} callback
  * @memberOf SourcesStore
  */
  addChangeListener(callback) {
    this.on('change', callback);
  }

  /**
  * This function removes the change listener when the view component
  * unmounts. It requires a:
  * @param {function} callback
  * @memberOf SourcesStore
  */
  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }

  /**
  * This function picks which payload to receive
  * from the dispatcher.
  * @param {object} result
  * @memberOf SourcesStore
  */
  handleNewsAction(result) {
    if (result.actionType === newsConstants.GET_NEWS_SOURCES) {
      this.sources = result.sources;
      this.emit('change');
    }
  }
}

const sourcesStore = new SourcesStore();
Dispatcher.register(sourcesStore.handleNewsAction.bind(sourcesStore));
export default sourcesStore;
