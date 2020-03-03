import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './router/Main';
import Footer from './components/Footer';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { theme_ } from './common_theme';
import { ThemeProvider } from '@material-ui/core/styles';

ReactDOM.render(
  <ThemeProvider theme={theme_}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
    <Footer />
  </ThemeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
