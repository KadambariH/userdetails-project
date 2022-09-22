import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import AppRouter from './routes/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <Provider store={store}>
   < AppRouter>
      <App />
    </AppRouter>
  </Provider>, document.getElementById('root')
);