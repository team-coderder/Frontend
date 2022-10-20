import React from 'react';
import styled from '@emotion/styled';
import { CiCircleRemove } from 'react-icons/ci';

interface MemberProps {
    width?: string;
    height?: string;
    fontSize?: 'large' | 'medium' | 'small';
    color?: 'white' | 'black';
    backgroundColor?: 'main' | 'sub';
    radius?: 'large' | 'medium' | 'small';
    focusBgColor?: 'black' | 'white';
    disable?: boolean;
    space?: number;
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${(props) => props.space}px;
`;

const Member = ({
    width,
    height,
    fontSize,
    color,
    backgroundColor,
    radius,
    focusBgColor,
    disable,
    space,
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
            space={space}
        >
            <>
                {children}
                {disable && (
                    <CiCircleRemove
                        style={{ marginLeft: '20px' }}
                        onClick={() => console.log('memeber deleted!')}
                    />
                )}
            </>
        </Component>
    );
};

export default Member;
