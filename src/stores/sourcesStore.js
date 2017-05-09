import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/dispatcher';
import newsConstants from '../constants/newsConstants';


class NewsStores extends EventEmitter {
  constructor() {
    super();
    this.sources = [];
  }

  fetchNewsSources() {
    return this.sources;
  }

  addChangeListener(callback) {
    this.on('change', callback);
  }
  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }

  handleNewsAction(result) {
    switch (result.actionType) {
      case newsConstants.GET_NEWS_SOURCES:
        this.sources = result.data;
        this.emit('change');
        break;
    }
  }

}

const newsstores = new NewsStores();
Dispatcher.register(newsstores.handleNewsAction.bind(newsstores));
export default newsstores;
