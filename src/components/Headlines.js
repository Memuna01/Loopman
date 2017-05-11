import React from 'react';
import * as newsActions from '../actions/newsActions';
import newsstores from '../stores/articlesStore';

const renderArticles = (headlines) => headlines.map((headline, index) => (
  <div className="col-sm-8 col-sm-offset-2" key={index}>
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4> {headline.publishedAt && headline.publishedAt.slice(0, 10)} - {headline.title} </h4>
      </div>

      <div className="panel-body">
        <div className="row">
          <div className="col-sm-4">
            <img width='200' height='150' src={headline.urlToImage} alt='image' />
          </div>
          <div className="col-sm-8">
            {headline.description}
            <br/> <br/>
            <a style={{marginRight: 10}} className="btn btn-primary" href={headline.url} target="_blank">View In Browser</a>
            <a className="btn btn-primary" href={`#/more?source=${headline.url}`}>View In App</a>
          </div>

        </div>
      </div>
    </div>
  </div>
));

class Headlines extends React.Component {
  constructor() {
    super();

    this.state = {
      articles: [],
    };

    this.fetchNewsArticles = this.fetchNewsArticles.bind(this);
  }

  fetchNewsArticles() {
    this.setState({ articles: newsstores.fetchNewsArticles() });
  }

  componentDidMount() {
    const articleId = this.props.location.query.source;
    const articleFilter = this.props.location.query.sortBy;

    newsActions.getNewsArticles(articleId, articleFilter);
    newsstores.addChangeListener(this.fetchNewsArticles);
  }

  componentWillUnmount() {
    newsstores.removeChangeListener(this.fetchNewsArticles);
  }

  render() {
    const headlines = this.state.articles.articles;
    const newSourceName = this.state.articles.source;
     return (
      <div>
        <h2 style={{textAlign:'center'}}>News From {newSourceName && newSourceName.split('-').join(' ').toUpperCase()}</h2>
        <br />
        {headlines && <div>{renderArticles(headlines)}</div>}
      </div>
    );
  }
}

export default Headlines;
