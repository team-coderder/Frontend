import { css, Global } from '@emotion/react';
import React from 'react';

export default function GlobalStyle() {
    return <Global styles={reset} />;
}

const reset = css`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html,
    h1,
    body {
        font-family: 'Spoqa Han Sans Neo';
        line-height: 1;
        height: 100%;
        overflow: auto;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`;
