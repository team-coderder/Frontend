import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

interface TextInputProps {
    width?: string;
    height?: string;
    margin?: string;
    type?: 'none' | 'id' | 'password';
    error?: boolean;
    placeholder?: string;
    value?: string;
    children?: React.ReactNode;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextInput(props: TextInputProps) {
    const theme = useTheme();
    const Component = styled.input`
        width: ${props.width ?? 'auto'};
        height: ${props.height ?? 'auto'};
        margin: ${props.margin ?? '0'};
        color: 'black';
    `;
    return (
        <>
            <Component
                type={props.type}
                value={props.value}
                onChange={props.onChange}
            />
            {props.error && <p style={{ color: theme.color.sub }}>error</p>}
        </>
    );
}

export default TextInput;
