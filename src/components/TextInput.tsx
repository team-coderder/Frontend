import React from 'react';
import styled from '@emotion/styled';
import theme from '../styles/theme';

interface TextInputProps {
    width?: string;
    height?: string;
    marginLeft?: string;
    margin?: string;
    type?: 'none' | 'id' | 'password';
    error?: boolean;
    placeholder?: string;
    value?: string | number;
    message?: string;
    children?: React.ReactNode;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const WarningBox = styled.div`
    margin-top: -15px;
    color: ${({ theme }) => theme.color.warning};
    font-size: ${({ theme }) => theme.font.size.small};
`;

const Component = styled.input<TextInputProps>`
    width: ${(props) => props.width ?? 'auto'};
    height: ${(props) => props.height ?? 'auto'};
    margin: ${(props) => props.margin ?? '0'};
    margin-left: ${(props) => props.marginLeft ?? '0'};
    color: ${({ theme }) => theme.color.black};
    border-bottom: ${({ theme }) => theme.color.gray} 1px solid;
    border-left: medium none;
    border-right: medium none;
    border-top: medium none;
    placeholder: ${(props) => props.placeholder};
    ::placeholder {
        color: ${() => theme.color.white};
    }
    &:focus {
        outline: none;
        border-bottom: 1px solid ${({ theme }) => theme.color.white};
    }
`;

const Label = styled.label`
    flex-direction: column;
    font-size: ${({ theme }) => theme.font.size.small}px;
`;

const TextInput = ({
    width,
    height,
    margin,
    type,
    error,
    placeholder,
    value,
    message,
    children,
    onChange,
}: TextInputProps) => {
    return (
        <Label>
            <Component
                type={type}
                value={value}
                onChange={onChange}
                width={width}
                height={height}
                message={message}
                placeholder={placeholder}
                margin={margin}
            />
            {children}
            {error && <WarningBox>{message}</WarningBox>}
        </Label>
    );
};

export default TextInput;
