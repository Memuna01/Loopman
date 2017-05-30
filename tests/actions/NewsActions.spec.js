import React from 'react';
import { expect } from 'chai';
import axios from 'axios';
import sinon from 'sinon';
import NewsActions from '../../src/actions/NewsActions';
import Dispatcher from '../../src/dispatcher/Dispatcher';
import newsConstants from '../../src/constants/newsConstants';
import mockNews from '../testUtils/mockNews';

describe('News Actions', () => {
  const axiosSpy = sinon.stub(axios, 'get', (arg) => {
    return arg.includes('sources') ? Promise.resolve({
      data: {
        sources: mockNews,
      },
    }) : Promise.resolve({
      data: mockNews,
    });
  });

  const dispatcherSpy = sinon.spy(Dispatcher, 'dispatch');

  afterEach(() => {
    axiosSpy.reset();
    dispatcherSpy.reset();
  });

  describe('#getNewsSources', () => {
    expect(NewsActions.getNewsSources).to.be.a('function');

    it('should dispatch news sources', () => {
      NewsActions.getNewsSources().then(() => {
        expect(axiosSpy.calledOnce).to.equal(true);
        expect(dispatcherSpy.calledOnce).to.equal(true);
        expect(dispatcherSpy.calledWith({
          actionType: newsConstants.GET_NEWS_SOURCES,
          sources: mockNews,
        })).to.equal(true);
      });
    });
  });

  describe('#getNewsArticles', () => {
    expect(NewsActions.getNewsArticles).to.be.a('function');

    it('should dispatch news articles', () => {
      NewsActions.getNewsArticles().then(() => {
        expect(dispatcherSpy.calledOnce).to.equal(true);
        expect(axiosSpy.calledOnce).to.equal(true);
        expect(dispatcherSpy.calledWith({
          actionType: newsConstants.GET_NEWS_ARTICLES,
          headlines: mockNews.articles,
          sourceName: mockNews.source,
        })).to.equal(true);
      });
    });
  });
});
