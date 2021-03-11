import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

import App from './app/App';
import theme from './lib/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
