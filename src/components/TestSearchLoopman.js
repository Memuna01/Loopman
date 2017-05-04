import React from 'react';
import * as newsActions from '../actions/newsActions';
import newsstores from '../stores/newsstores';

class TestSearchLoopman extends React.Component {
  constructor() {
    super();

    this.state = {
      sources: [],
      searchValue: '',
    };

    this.fetchNewsSources = this.fetchNewsSources.bind(this);
  }

  fetchNewsSources() {
    this.setState({ sources: newsstores.fetchNewsSources() });
  }

  handleChange(e) {
    this.setState({ searchValue: e.target.value });
  }

  componentWillMount() {
    newsActions.getNewsSources();
    newsstores.on('sources_change', this.fetchNewsSources);
  }

  componentDidMount() {
  }

  componentWillUnmount(){
    newsstores.removeListener('sources_change', this.fetchNewsSources);
  }

  render() {
    let sources = this.state.sources;
    const searchValue = this.state.searchValue.trim().toLowerCase();

    if (searchValue.length > 0) {
      sources = sources.filter(s => s.name.toLowerCase().match(searchValue));
    }

    return (
      <div className="col-sm-8 col-sm-offset-2">
        <input
          className="form-control" type="text" name=""
          value={this.state.searchValue} onChange={this.handleChange.bind(this)} placeholder="Find source..."
        />

        <h3>All Sources: </h3>
        <ul className="list-group">
          {sources.map((s, index) => <li id={index} className="list-group-item" key={index}>{s.name} &emsp;
            {s.sortBysAvailable.map((option, index) => <a key={index} href={`#/TestHeadlines?source=${s.id}&sortBy=${option}`}> ({option}) </a>)}
          </li>)}
        </ul>
      </div>
    );
  }
}

export default TestSearchLoopman;
