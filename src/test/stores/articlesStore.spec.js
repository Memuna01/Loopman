import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as newsActions from '../../actions/newsActions';
import newsstores from '../../stores/articlesStore';
import Dispatcher from '../../dispatcher/dispatcher';
import newsConstants from '../../constants/newsConstants';

describe('Articles Store', () => {
  const newsFromApi = {
    "status": "ok",
    "source": "the-next-web",
    "sortBy": "latest",
    "articles": [
        {
            "author": "Andrei Tiburca",
            "title": "How high can weed tech go? Pretty high if you ask Silicon Valley",
            "description": "Before recreational marijuana usage became legal in eight states, weed tech typically stayed in the realm of online discussions. In fact, it wasn’t that long ago that bongs and rolling ...",
            "url": "https://thenextweb.com/tech/2017/05/09/high-can-weed-tech-go-pretty-high-ask-silicon-valley/",
            "urlToImage": "https://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/gizmodo-high-tech-620x349.jpg",
            "publishedAt": "2017-05-09T15:30:48Z"
        },
        {
            "author": "Mix",
            "title": "Mozilla floods EU officials with digital leaflets to fight nonsensical copyright laws",
            "description": "Mozilla continues its march for better copyrights laws in Europe and the company is back with yet another online campaign. This time it wants your help to drop millions of virtual leaflets ...",
            "url": "https://thenextweb.com/insider/2017/05/09/mozilla-eu-copyright-laws-leaflets/",
            "urlToImage": "https://cdn2.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/Paperstorm.png",
            "publishedAt": "2017-05-09T15:08:33Z"
       }   
    ]
  }

  it('should exist', () => {
    expect(newsstores).to.exist;
  }); 

  it('should be an object', () => {
    expect(newsstores).to.be.an('object');
  }); 

  it('should receive data from dispatcher', () => {
      newsActions.getNewsArticles = () => {
        Dispatcher.dispatch({
        actionType: newsConstants.GET_NEWS_ARTICLES,
        articles: newsFromApi
        });
        
      }
    expect(newsstores).to.be.an('object');
  }); 

   

});