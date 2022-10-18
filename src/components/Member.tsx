import React from 'react';
import styled from '@emotion/styled';

interface MemberProps {
    width?: string;
    height?: string;
    fontSize?: 'large' | 'medium' | 'small';
    fontWeight?: 'bold' | 'normal' | 'thin';
    color?: 'white' | 'black';
    backgroundColor?: 'main' | 'sub';
    radius?: 'large' | 'medium' | 'small';
    focusBgColor?: 'black' | 'white';
    children: React.ReactNode;
    // url: string;
}

const Member = ({
    width,
    height,
    fontSize,
    fontWeight,
    color,
    backgroundColor,
    radius,
    focusBgColor,
    children,
}: MemberProps) => {
    const Component = styled.div`
        width: ${width ?? '200px'};
        height: ${height ?? '50px'};
        font-size: ${({ theme }) =>
            !fontSize ? theme.font.size.medium : theme.font.size[fontSize]}px;
        font-weight: ${({ theme }) =>
            !fontWeight
                ? theme.font.weight.normal
                : theme.font.weight[fontWeight]};
        color: ${({ theme }) =>
            !color ? theme.color.white : theme.color.black};
        background-color: ${({ theme }) =>
            !backgroundColor ? theme.color.sub.common : theme.color.gray};
        cursor: pointer;
        border: none;
        border-radius: ${({ theme }) =>
            radius === 'small'
                ? theme.borderRadius.small
                : radius === 'large'
                ? theme.borderRadius.large
                : theme.borderRadius.medium};

        transition: all 0.5s;
        &:focus {
            background-color: ${({ theme }) =>
                !focusBgColor ? backgroundColor : theme.color[focusBgColor]};
        }
    `;
    return <Component>{children}</Component>;
};

export default Member;
