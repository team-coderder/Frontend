import styled from '@emotion/styled';

type IconProps = {
    'background-color'?: string;
};

export const Icon = styled.div<IconProps>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(props) =>
        props['background-color'] ? props['background-color'] : 'transparent'};
    font-size: 1.5rem;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
`;
