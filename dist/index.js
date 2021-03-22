import React from 'react';
import { unstable_createMuiStrictModeTheme as createMuiTheme, ThemeProvider as MuiThemeProvider, CssBaseline, } from '@material-ui/core';
var theme = createMuiTheme({
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
    typography: {
        fontFamily: [
            '"Open Sans"',
            '"Helvetica Neue"',
            'Arial',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        fontWeightMedium: 600,
    },
    shape: {
        borderRadius: 0,
    },
});
export var ThemeProvider = function (_a) {
    var children = _a.children;
    return (React.createElement(MuiThemeProvider, { theme: theme },
        React.createElement(CssBaseline, null),
        children));
};
export default theme;
