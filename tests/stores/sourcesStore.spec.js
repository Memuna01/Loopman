import React from 'react';
import { expect } from 'chai';
import sourcesStore from '../../src/stores/sourcesStore';
import Dispatcher from '../../src/dispatcher/Dispatcher';
import newsConstants from '../../src/constants/newsConstants';
import mockNews from '../testUtils/mockNews';


describe('Sources Store', () => {
  it('should exist', () => {
    expect(sourcesStore).to.exist;
  });

  it('should be an object', () => {
    expect(sourcesStore).to.be.an('object');
  });

  it('should have a \'addChangeListener\' function', () => {
    expect(sourcesStore.addChangeListener).to.be.a('function');
  });

  it('should receive news sources from Dispatcher', () => {
    Dispatcher.dispatch({
      actionType: newsConstants.GET_NEWS_SOURCES,
      sources: mockNews,
    });
    expect(sourcesStore.fetchNewsSources()).to.eql(mockNews);
  });

  it('should emit change on receiving news sources from Dispatcher', () => {
    Dispatcher.dispatch({
      actionType: newsConstants.GET_NEWS_SOURCES,
      sources: mockNews,
    });
    expect(sourcesStore.emit('change')).to.exist;
  });
});
