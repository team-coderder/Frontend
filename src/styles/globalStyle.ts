// import { createGlobalStyle } from 'styled-components';
// import reset from 'styled-reset';

// const GlobalStyle = createGlobalStyle`
//   ${reset}
//   * {
//     box-sizing: border-box;
//   }
// `;
// export default GlobalStyle;

import { css } from '@emotion/react';

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
`;

export default reset;
