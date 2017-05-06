import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/dispatcher';

class NewsStores extends EventEmitter {
  constructor() {
    super();
    this.sources = [];
  }

  fetchNewsSources() {
    return this.sources;
  }

  handleNewsAction(result) {
    switch (result.actionType) {
      case 'GET_NEWS_SOURCES':
        this.sources = result.data;
        this.emit('sources_change');
        break;
    }
  }

}

const newsstores = new NewsStores();
Dispatcher.register(newsstores.handleNewsAction.bind(newsstores));
export default newsstores;
