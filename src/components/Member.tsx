import React from 'react';
import styled from '@emotion/styled';

interface MemberProps {
    width?: string;
    height?: string;
    fontSize?: 'large' | 'medium' | 'small';
    color?: 'white' | 'black';
    backgroundColor?: 'main' | 'sub';
    radius?: 'large' | 'medium' | 'small';
    focusBgColor?: 'black' | 'white';
    children: React.ReactNode;
    // url: string;
}

const Component = styled.div<MemberProps>`
    width: ${(props) => props.width ?? '150px'};
    height: ${(props) => props.height ?? '40px'};
    font-size: ${(props) =>
        ({ theme }) =>
            !props.fontSize
                ? theme.font.size.medium
                : theme.font.size[props.fontSize]}px;
    color: ${(props) =>
        ({ theme }) =>
            !props.color ? theme.color.white : theme.color.black};
    background-color: ${(props) =>
        ({ theme }) =>
            !props.backgroundColor
                ? theme.color.main.common
                : theme.color.gray};
    cursor: pointer;
    border: none;
    border-radius: ${(props) =>
        ({ theme }) =>
            props.radius === 'small'
                ? theme.borderRadius.small
                : props.radius === 'large'
                ? theme.borderRadius.large
                : theme.borderRadius.medium};
    transition: all 0.5s;
    &:hover {
        background-color: ${(props) =>
            ({ theme }) =>
                !props.focusBgColor
                    ? props.backgroundColor
                    : theme.color[props.focusBgColor]};
    }
`;

const Member = ({
    width,
    height,
    fontSize,
    color,
    backgroundColor,
    radius,
    focusBgColor,
    children,
}: MemberProps) => {
    return (
        <Component
            width={width}
            height={height}
            fontSize={fontSize}
            color={color}
            backgroundColor={backgroundColor}
            radius={radius}
            focusBgColor={focusBgColor}
        >
            {children}
        </Component>
    );
};

export default Member;
