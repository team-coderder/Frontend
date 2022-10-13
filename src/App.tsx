import React from 'react';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import TextInput from './components/TextInput';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <h1>React without CRA</h1>
            <a href="https://www.naver.com">naver</a>
            <p style={{ color: theme.color.main }}>hihi</p>
            <TextInput error={true} />
        </ThemeProvider>
    );
};

export default App;
