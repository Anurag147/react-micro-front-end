import React from 'react';
import ReactDOM from 'react-dom';
import {createMemoryHistory} from 'history';
import App from './App';

// Mount function to start up the app
/*const mount = (el) => {
  ReactDOM.render(<h1>Hi there!</h1>, el);
};*/

// Mount function to start up the app
// Mount function to start up the app
const mount = (el, { onNavigate }) => {
  const history = createMemoryHistory();
  history.listen(onNavigate);
  ReactDOM.render(<App history={history} />, el);
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// and we should export the mount function
export { mount };