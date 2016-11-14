import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import routes from './routes';
import ManageBookForm from './containers/ManageBookForm';

import {Provider} from 'react-redux';
import createStore from './redux';
const store = createStore();


let documentReady = () => {
  let reactNode = document.getElementById('react');
  if(reactNode){
    ReactDom.render(
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
    , reactNode
    );
  }
};

$(documentReady);
