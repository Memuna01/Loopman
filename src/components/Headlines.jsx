import React from 'react';
import { hashHistory } from 'react-router';
import NewsActions from '../actions/NewsActions';
import articlesStore from '../stores/articlesStore';
import RenderHeadlines from './RenderHeadlines.jsx';

/**
* This is the component that displays headlines gotten from various
* news sources.
* @class Headlines
* @extends {React.Component}
*/
class Headlines extends React.Component {
  constructor() {
    super();

    this.state = {
      headlines: [],
      loading: false,
      sourceName: '',
    };

    // This binds the function to the "this" in the constructor.
    this.fetchNewsArticles = this.fetchNewsArticles.bind(this);
  }

  /**
  * This React lifecycle method is called when component mounts.
  * @method componentDidMount
  * @memberOf Headlines
  */
  componentDidMount() {
    const articleId = this.props.location.query.source;
    const articleFilter = this.props.location.query.sortBy;
    NewsActions.getNewsArticles(articleId, articleFilter);
    this.setState({ loading: true });
    articlesStore.addChangeListener(this.fetchNewsArticles);
  }

  /**
  * This lifecycle method is called once component unmounts.
  * @method componentWillUnmount
  * @memberOf Headlines
  */
  componentWillUnmount() {
    articlesStore.removeChangeListener(this.fetchNewsArticles);
  }

  /**
  * This fetches headlines from the store and sets them as state for this
  * component.
  * @method fetchNewsArticles
  * @memberOf Headlines
  */
  fetchNewsArticles() {
    const articles = articlesStore.fetchNewsArticles;
    const sourceName = articlesStore.fetchSource;
    this.setState({
      headlines: articles,
      sourceName,
      loading: false,
    });
  }

  /**
  * This shows the loading spinner before content on page is rendered.
  * @returns a react element.
  * @method renderHeadlines
  * @memberOf Headlines
  */
  renderHeadlines() {
    const { loading, headlines } = this.state;
    if (loading) {
      return (<img src="src/images/loader.gif" alt="Loading..." />);
    }
    return (<RenderHeadlines headlines={headlines} />);
  }

  /**
  * This lifecyle method renders headlines on the page.
  * @method render
  * @memberOf Headlines
  * @returns a react element.
  */
  render() {
    const newSourceName = this.state.sourceName;
    return (
      <div>
        <h3
          className="col-sm-8 col-sm-offset-2 headlines-header"
          style={{ textAlign: 'center' }}
        >
          <a
            title="previous page"
            onClick={() => hashHistory.goBack()}
            href=""
          >
            <i className="fa fa-angle-left" />
          </a>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          NEWS FROM &nbsp;
          {newSourceName &&
            newSourceName.split('-').join(' ').toUpperCase()}
        </h3>
        {this.renderHeadlines()}
      </div>
    );
  }
}

export default Headlines;
