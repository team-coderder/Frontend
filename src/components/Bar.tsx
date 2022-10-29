import React from 'react';
import styled from '@emotion/styled';

interface Props {
    vertical?: boolean;
    breadth?: string;
    background?: string;
    children: React.ReactNode;
    align_end?: boolean;
}

const StyledBar = styled.div<Props>`
    position: absolute;
    height: ${({ vertical, breadth }) => (vertical ? '100%' : breadth)};
    width: ${({ vertical, breadth }) => (!vertical ? '100vw' : breadth)};
    background-color: ${({ theme, background }) =>
        background ?? theme.color.main.light};
    display: flex;
    align-items: center;
    flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
    justify-content: ${({ align_end }) =>
        align_end ? 'flex-end' : 'flex-start'};
    transition: all 0.5s;
    > * {
        padding: 0.5rem;
    }
`;

const Bar = ({
    vertical,
    breadth = '4rem',
    background,
    children,
    align_end,
}: Props) => {
    return (
        <StyledBar
            vertical={vertical}
            breadth={breadth}
            background={background}
            align_end={align_end}
        >
            {children}
        </StyledBar>
    );
};

export default Bar;
