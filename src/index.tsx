import React from 'react';
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#1890ff',
    },
    secondary: {
      main: '#f5222d',
    },
    background: {
      default: '#1C2025',
      paper: '#282C34',
    },
  },
  shape: {
    borderRadius: 0,
  },
});

type IProps = {
  children: React.ReactChild | React.ReactChildren;
};

export const ThemeProvider = ({ children }: IProps) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);

export default theme;
