import styled from '@emotion/styled';
import React, { useState } from 'react';
import theme from '../styles/theme';
import TextInput from './TextInput';

interface SearchProps {
    width?: string;
    height?: string;
    space?: string;
    // error?: boolean;
}

const SearchContainer = styled.div<SearchProps>`
    height: 30vh;
    margin: ${(props) => props.space};
`;
const ResultBox = styled.div<{ onClick: () => void }>`
    background-color: ${() => theme.color.main.light};
    padding-left: 5px;
    padding-top: 3px;
    border-radius: 2px;
    &:hover {
        cursor: pointer;
        background-color: ${() => theme.color.main.dark};
    }
`;

const dummy = [
    {
        user_id: '1',
        username: 'molisee123',
        nickname: 'molisee',
    },
    {
        user_id: '2',
        username: 'tousles22',
        nickname: 'jours',
    },
];
const SearchID = ({ width, height, space }: SearchProps) => {
    const [val, setVal] = useState('');

    const handleVal = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVal(event.currentTarget.value);
    };

    const items = dummy
        .filter((data) => {
            if (val == null) return data;
            else if (data.username.toLowerCase().includes(val.toLowerCase())) {
                return data;
            }
        })
        .map((data) => {
            return (
                val !== data.username && (
                    <div>
                        <ResultBox onClick={() => setVal(data.username)}>
                            {data.username}
                        </ResultBox>
                    </div>
                )
            );
        });

    return (
        <SearchContainer space={space}>
            <TextInput
                width={width}
                placeholder="id검색"
                value={val}
                onChange={handleVal}
                color="white"
            />
            {val && items}
        </SearchContainer>
    );
};

export default SearchID;
