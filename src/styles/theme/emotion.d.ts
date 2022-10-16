import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        color: {
            main: string;
            sub: string;
            black: string;
            white: string;
            primary: string;
            secondary: string;
            warning: string;
            success: string;
        };
        font: {
            size: {
                primary: number;
                secondary: number;
            };
        };
    }
}
