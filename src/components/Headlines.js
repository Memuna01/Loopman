import React from 'react';
import * as newsActions from '../actions/newsActions';
import newsstores from '../stores/newsstores';


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

  getNewsArticlesFromAction(){

  }
  
  componentWillMount(){
    const articleId = this.props.location.query.source;
    const articleFilter = this.props.location.query.sortBy;

    newsActions.getNewsArticles(articleId, articleFilter);
    newsstores.on('articles_change', this.fetchNewsArticles);
      
  }

  componentDidMount() {
  }

  componentWillUnmount(){
      newsstores.removeListener('articles_change', this.fetchNewsArticles);
  }

    render(){
        const data = this.state.articles.articles;
        console.log("source name",this.state.articles.source);
        const newSourceName = this.state.articles.source;

        function renderArticles () {
            return data.map((article, index) => {
             return (
                 <div className="col-sm-6" key={index}>
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title"> <span className="btn">{article.title}</span></h3>
                        </div>
                        <div className="panel-body">
                            { article.description } 
                            <a href={article.url} target="_blank">...View Full Article...</a>
                        </div>
                    </div>
                </div>
             );
            });
        }
        return (
             <div> 
                <h2 style={{textAlign: 'center'}}>News From {newSourceName && newSourceName.split("-").join(" ").toUpperCase()}</h2>
                <p></p>
               {data && <div>{renderArticles()}</div>}
            </div>  
        );
  }
}

export default Headlines;
