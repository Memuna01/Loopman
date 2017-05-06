import React from 'react';
import * as newsActions from '../actions/newsActions';
import newsstores from '../stores/sourcesStore';

class SearchLoopman extends React.Component {
  constructor() {
    super();

    this.state = {
      sources: [],
      searchValue: '',
    };

    this.fetchNewsSources = this.fetchNewsSources.bind(this);
    this.getNewsSourcesFromActions = this.getNewsSourcesFromActions.bind(this);
  }

  fetchNewsSources() {
    this.setState({ sources: newsstores.fetchNewsSources() });
  }

  handleChange(e) {
    this.setState({ searchValue: e.target.value });
  }

  getNewsSourcesFromActions() {
    newsActions.getNewsSources();
  }

  componentWillMount() {
    this.getNewsSourcesFromActions();
    newsstores.on('sources_change', this.fetchNewsSources);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    newsstores.removeListener('sources_change', this.fetchNewsSources);
  }

  render() {
    let sources = this.state.sources;
    const searchValue = this.state.searchValue.trim().toLowerCase();

    if (searchValue.length > 0) {
      sources = sources.filter(source => source.name.toLowerCase().match(searchValue));
    }

    return (
      <div className="col-sm-8 col-sm-offset-2">
        <input
          className="form-control" type="text" name=""
          value={this.state.searchValue} onChange={this.handleChange.bind(this)} placeholder="Find source..."
        />

        <h3>All Sources: </h3>
        <ul className="list-group">
          { sources.map((source, index) => <li id={index} className="list-group-item" key={index}>{source.name} &emsp;
            {source.sortBysAvailable.map((option, index) => <a key={index} href={`#/headlines?source=${source.id}&sortBy=${option}`}> ({option}) </a>)}
          </li>) }
        </ul>
      </div>
    );
  }
}

export default SearchLoopman;
