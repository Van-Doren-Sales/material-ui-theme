import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

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

export default theme;
