![Screenshot of common components](/public/screenshot.png?raw=true 'Preview')

# Material UI Theme

## Requirements

Latest versions of the following

- React
- React DOM
- Material-UI

## Installing

`npm install @vandorensales/material-ui-theme`

## Basic Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import Theme from '@vandorensales/material-ui-theme';

import App from './App';

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
```

## Using our ThemeProvider

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@vandorensales/material-ui-theme';

import App from './App';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
```
