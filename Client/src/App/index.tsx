import React from 'react';
import runSaga, { store } from '../store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthMiddleware from './AuthMiddleware';

runSaga();

const App = () => {
  return (
    <Provider
      store={store}>
      <BrowserRouter>
        <Route path="/" component={AuthMiddleware} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;