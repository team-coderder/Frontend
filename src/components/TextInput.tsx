import React from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

interface TextInputProps {
    width?: string;
    height?: string;
    margin?: string;
    type?: 'none' | 'id' | 'password';
    error?: boolean;
    placeholder?: string;
    value?: string | number;
    children?: React.ReactNode;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextInput(props: TextInputProps) {
    const theme = useTheme();

    const Component = styled.input`
        width: ${props.width ?? 'auto'};
        height: ${props.height ?? 'auto'};
        margin: ${props.margin ?? '0'};
        color: ${theme.color.black};
        border-bottom: ${theme.color.gray} 1px solid;
        border-left: medium none;
        border-right: medium none;
        border-top: medium none;
        &:focus {
            outline: none;
            border-bottom: 1px solid ${theme.color.black};
        }
    `;

    const Label = styled.label`
        display: flex;
        flex-direction: column;
        font-size: ${({ theme }) => theme.font.size.small}px;
    `;
    return (
        <Label>
            <Component
                type={props.type}
                value={props.value}
                onChange={props.onChange}
            />
            {props.children}
            {/* {props.error && <p style={{ color: theme.color.sub }}>error</p>} */}
        </Label>
    );
}

export default TextInput;
