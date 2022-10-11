import React from 'react';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import Button from './components/Button';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <h1 style={{ color: theme.color.main.dark }}>React without CRA</h1>
            <div>
                <Button hoverBgColor="white" hoverColor="gray">
                    회원가입
                </Button>
            </div>
            <Button color="black" hoverBgColor="white" hoverColor="gray">
                로그인
            </Button>
        </ThemeProvider>
    );
};

export default App;
