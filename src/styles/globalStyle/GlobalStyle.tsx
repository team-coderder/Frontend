import { css, Global } from '@emotion/react';
import React from 'react';

export default function GlobalStyle() {
    return <Global styles={reset} />;
}

const reset = css`
    html,
    h1,
    body {
        font-family: 'Spoqa Han Sans Neo';
        line-height: 1;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    * {
        box-sizing: border-box;
    }
`;
