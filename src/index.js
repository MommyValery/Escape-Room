import App from 'components/app/app';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';
import * as ReactDOM from 'react-dom';



render(
  <StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);  