import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

interface LinkProps {
    size?: 'large' | 'medium' | 'small';
    weight?: 'bold';
    color?: 'black' | 'white';
    children: React.ReactNode;
    url: string;
}

const Nav = (props: LinkProps) => {
    const Component = styled(Link)`
        font-size: ${({ theme }) => theme.font.size[props.size ?? 'large']}px;
        font-weight: ${({ theme }) =>
            theme.font.weight[props.weight ?? 'bold']};
        color: ${({ theme }) => theme.color.black};
    `;
    return <Component to={props.url}>{props.children}</Component>;
};

export default Nav;
