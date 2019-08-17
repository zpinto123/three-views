import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import './i18n';
import configureStore from './shared/state/configure-store';
import * as serviceWorker from './serviceWorker';

import './index.css';

import routes from './routes';

const rootRouter = process.env.REACT_APP_ROOT_ROUTER || '/';

ReactDOM.render(
  <Suspense fallback={null}>
    <Provider store={configureStore()}>
      <BrowserRouter basename={rootRouter}>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  </Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
