import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Main from './router/Main';
import Header from './components/Header';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import theme from './common_theme';
import { ThemeProvider } from '@material-ui/core/styles';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  </ThemeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
