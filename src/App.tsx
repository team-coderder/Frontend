import React from 'react';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <h1 style={{ color: theme.color.primary }}>React without CRA</h1>
        </ThemeProvider>
    );
};

export default App;
