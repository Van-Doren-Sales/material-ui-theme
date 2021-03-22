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
import { Theme } from '@vandorensales/material-ui-theme';

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

## Adding fonts to your project

This theme uses Open Sans instead of Roboto. If you'd like to use the Open Sans font, you can include it in your html or css via one of the 2 below methods. You'll need to include 300,400,600 and 700 weights. Alternatively, you can self host the fonts using this [webfont helper](https://google-webfonts-helper.herokuapp.com). You'll need to define the @font-face manually in your global css if you choose to self host.

html

```html
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
  rel="stylesheet"
/>
```

css

```css
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');
```
