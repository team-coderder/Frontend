import React from 'react';
import styled from '@emotion/styled';

interface MenuProps {
    vertical?: boolean;
    breadth?: string;
    background?: string;
    children: React.ReactNode;
    align_end?: boolean;
}

const MenuBar = ({
    vertical,
    breadth = '4rem',
    background,
    children,
    align_end,
}: MenuProps) => {
    const Bar = styled.div`
        height: ${vertical ? '100vh' : breadth};
        width: ${!vertical ? '100vw' : breadth};
        background-color: ${({ theme }) =>
            background ?? theme.color.main.light};
        display: flex;
        align-items: center;
        flex-direction: ${vertical ? 'column' : 'row'};
        justify-content: ${align_end ? 'flex-end' : 'flex-start'};
        > * {
            padding: 0.5rem;
        }
    `;
    return <Bar>{children}</Bar>;
};

export default MenuBar;
