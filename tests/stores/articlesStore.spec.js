import React from 'react';
import { expect } from 'chai';
import articlesStore from '../../src/stores/articlesStore';
import Dispatcher from '../../src/dispatcher/Dispatcher';
import newsConstants from '../../src/constants/newsConstants';
import mockNews from '../testUtils/mockNews';

describe('Articles Store', () => {
  it('should exist', () => {
    expect(articlesStore).to.exist;
  });

  it('should be an object', () => {
    expect(articlesStore).to.be.an('object');
  });

  it('should have a \'addChangeListener\' function', () => {
    expect(articlesStore.addChangeListener).to.be.a('function');
  });

  it('should receive news headlines from Dispatcher', () => {
    Dispatcher.dispatch({
      actionType: newsConstants.GET_NEWS_ARTICLES,
      headlines: mockNews,
    });
    expect(articlesStore.fetchNewsArticles).to.eql(mockNews);
  });

  it('should emit change on receiving news headlines from Dispatcher', () => {
    Dispatcher.dispatch({
      actionType: newsConstants.GET_NEWS_ARTICLES,
      headlines: mockNews,
    });
    expect(articlesStore.emit('change')).to.exist;
  });
});
