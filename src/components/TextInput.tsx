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
    message?: string;
    children?: React.ReactNode;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Component = styled.input<TextInputProps>`
    width: ${(props) => props.width ?? 'auto'};
    height: ${(props) => props.height ?? 'auto'};
    margin: ${(props) => props.margin ?? '0'};
    color: ${({ theme }) => theme.color.black};
    border-bottom: ${({ theme }) => theme.color.gray} 1px solid;
    border-left: medium none;
    border-right: medium none;
    border-top: medium none;
    &:focus {
        outline: none;
        border-bottom: 1px solid ${({ theme }) => theme.color.black};
    }
`;

const Label = styled.label`
    /* display: flex; */
    flex-direction: column;
    font-size: ${({ theme }) => theme.font.size.small}px;
`;

// const CheckCircle = () => <BsCheckCircle />;

function TextInput(props: TextInputProps) {
    const theme = useTheme();

    return (
        <>
            <Label>
                <Component
                    type={props.type}
                    value={props.value}
                    onChange={props.onChange}
                    width={props.width}
                    height={props.height}
                    message={props.message}
                />
                {props.children}
                {props.error ? (
                    <div
                        style={{
                            color: theme.color.warning,
                            fontSize: theme.font.size.small,
                        }}
                    >
                        {props.message}
                    </div>
                ) : (
                    <div style={{ display: 'flex', color: theme.color.black }}>
                        {props.message}
                    </div>
                )}
            </Label>
        </>
    );
}

export default TextInput;
