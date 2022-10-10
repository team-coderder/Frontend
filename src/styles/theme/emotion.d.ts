import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        color: {
            main: string;
            sub: string;
            black: string;
            white: string;
        };
    }
}
