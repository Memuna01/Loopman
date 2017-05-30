[![Build Status](https://travis-ci.org/andela-mharuna/Loopman.svg?branch=staging)](https://travis-ci.org/andela-mharuna/Loopman) [![Coverage Status](https://coveralls.io/repos/github/andela-mharuna/Loopman/badge.svg?branch=staging)](https://coveralls.io/github/andela-mharuna/Loopman?branch=staging)[![Code Climate](https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg)](https://codeclimate.com/github/codeclimate/codeclimate)

# Loopman
A news feed application that delivers headlines from 70 news sources worldwide.

### Introduction

Loopman is an application that lets you view headlines from 70 different
news sources worldwide(e.g Al Jazeera,BuzzFeed, CNN, Bild, Ars Technica e.t.c).
Users can log in with Google+, search through a list of news sources and view
headlines for these news sources based on options(Top, Latest, Popular)
available on the news site. It keeps you up-to-date with happenings all around
the world, fast, and with a simple, easy-to-use user interface.

### Development

Loopman is built using ReactJS, React-router for routing and it
consumes a public api from the endpoints on
newsapi.org. The tests have been written using Mocha, Chai expect syntax and
Enzyme.


### Features

* Google+ sign-in
* List of news sites available.
* View news for preferred source.
* Sort through news headlines.
* Link to view full news in browser and also within the app.

### User Guide

* Head over to http://andela-loopman.herokuapp.com to use this app

### How To Contribute

* Download/Clone this repository.
* Install the dependencies using npm install.
* Run npm start to start the application.
* To test: run npm test.
* Fork this repo to your own repository.
* Create a new branch: git checkout -b new-branch-name.
* Work on a new feature and push to your branch.
* Create a pull request to the staging branch of this repo.

### Core Technologies

* React: For the User Interface (https://facebook.github.io/react/)
* React-Router: For routing in the app
 (https://www.npmjs.com/package/react-router)
* ReactDom: This package serves as the entry point of the DOM-related rendering
 paths(https://www.npmjs.com/package/react-dom)
* Node.js (npm): NPM was used to install all node packages
 (https://nodejs.org/en/)
* ES6: Used in React classes
* Webpack: webpack bundles my modules into one static asset
 (https://webpack.github.io/)
* Babel: For transpiling ES6 syntax to ES5(https://babeljs.io/)
* Mocha: For writing tests(https://mochajs.org/)
* Chai: Expect statements in my test suites(http://chaijs.com/)
* Enzyme: Used with Mocha and chai to test React components
 (https://github.com/airbnb/enzyme)
* axios: http client library for making api calls
(https://www.npmjs.com/package/axios)

### Resources
* News api: provides endpoints for news sources and headlines (newsapi.org)


# Limitations
* Users can only log in with Google+ currently
* Users cannot bookmark/favourite headlines currently
