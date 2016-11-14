import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ManageBookForm from './containers/ManageBookForm';
import SuccessPage from './containers/SuccessPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ManageBookForm} />
    <Route path="success" component={SuccessPage} />
  </Route>
);