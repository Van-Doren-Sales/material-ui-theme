![Screenshot of common components](/public/screenshot.png?raw=true 'Preview')

# Material UI Theme

## Requirements

This package requires that you have the latest version of React, React DOM, and Material-UI installed.

## Installing

`npm install @vandorensales/material-ui-theme`

## Basic Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core';
import Theme from '@vandorensales/material-ui-theme';

import App from './App';

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
```
