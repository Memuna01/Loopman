import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Index extends React.Component {

  constructor() {
    super();
    this.state = { news: [] };
  }
  componentDidMount() {
    const url = 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=213327409d384371851777e7c7f78dfe';
    return axios.get(url)
        .then((response) => {
          const news = response.data;
          this.setState({ news });
        })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const data = this.state.news.articles;
    function renderArticles() {
      return data.map((article, index) => (
        <div className="col-sm-12" key={index}>
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title"> <span className="btn">{article.title} by {article.author}</span></h3>
            </div>
            <div className="panel-body">
              { article.description }
              <a href={article.url} target="_blank">Read More...</a>
            </div>
          </div>
        </div>
             ));
    }
    return (
      <div className="col-sm-11 col-sm-offset-1">
        <h2>Latest news from {this.state.news.source}</h2>
        <p />
        {data && <div>{renderArticles()}</div>}
      </div>
    );
  }

}

export default Index;
