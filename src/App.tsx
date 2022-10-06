import React from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import reset from './styles/globalStyle';

const App = () => {
    return (
        <div className="App">
            <Global styles={reset} />
            <h1>React without CRA</h1>
            <a href="https://www.naver.com">naver</a>
        </div>
    );
};

export default App;
