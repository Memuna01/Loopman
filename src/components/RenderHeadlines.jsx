import React from 'react';
import Img from 'react-image';
import { hashHistory } from 'react-router';

/**
* renderArticles is a pure function which maps through the response gotten
* from newsapi.org articles endpoint.
* @param {Array} headlines is the array of data from the api
* that is passed to the renderArticles function from the Headlines component.
* @returns a react element, showing the list of headlines gotten
* from newsapi.org
*/
const RenderHeadlines = ({ headlines }) =>
  (<div
    style={{ backgroundColor: '#EEF8FC', paddingTop: 15 }}
    className="col-sm-8 col-sm-offset-2 headlines-list"
  >
    {headlines.map((headline, index) => (
      <div className="panel panel-default" key={index}>
        <div className="panel-heading">
          <h4> {headline.title}</h4>
        </div>

        <div className="panel-body">
          <div className="row">
            <div className="col-sm-4">
              <Img
                width="200" height="150"
                src={[
                  headline.urlToImage,
                  '../src/images/default_image.jpeg',
                ]}
                alt="image"
              />
            </div>

            <div className="col-sm-8">
              {headline.publishedAt &&
                headline.publishedAt.slice(0, 10)} - {headline.description}
              <br /> <br />

              <a
                style={{ marginRight: 10 }}
                className="btn btn-primary" href={headline.url}
                target="_blank"
              >
              View In Browser
              </a>
              <a
                className="btn btn-primary"
                href={`#/more?source=${headline.url}`}
              >
                View In App
              </a>
            </div>
          </div>
        </div>
      </div>
    ))}

    <div className="col-sm-2 col-sm-offset-5 btn btn-default">
      <a
        title="previous page"
        href=""
        onClick={() => hashHistory.goBack()}
      >
        Back
      </a>
    </div>
  </div>
  );

export default RenderHeadlines;
