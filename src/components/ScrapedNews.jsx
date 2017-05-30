import React from 'react';
import Iframe from 'react-iframe';

/**
* THis class displays news headlines within this application.
* It uses an npm module: "react-iframe" to display headlines from the news
* sites in this application.
* @class ScrapedNews
* @extends {React.Component}
*/
class ScrapedNews extends React.Component {
  render() {
    const scrapedNewsUrl = this.props.location.search.slice(8);

    return (
      <div>
        <Iframe
          url={scrapedNewsUrl}
          width="100%"
          height="1050px"
          display="initial"
          position="relative"
          allowFullScreen
        />
      </div>
    );
  }
}

export default ScrapedNews;
