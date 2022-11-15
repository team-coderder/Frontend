import styled from '@emotion/styled';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import theme from '../styles/theme';
import TextInput from './TextInput';

interface SearchProps {
    width?: string;
    height?: string;
    space?: string;
    onClick?: () => void;
    // error?: boolean;
}

const SearchContainer = styled.div<SearchProps>`
    height: 30vh;
    margin: ${(props) => props.space};
`;
const ResultBox = styled.div<SearchProps>`
    background-color: ${() => theme.color.main.light};
    height: ${(props) => props.height};
    padding-left: 3px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    &:hover {
        cursor: pointer;
        background-color: ${() => theme.color.main.dark};
    }
`;
const ResultId = styled.div`
    padding-left: 13px;
`;
const IconBox = styled.div`
    margin-left: 3px;
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
                    <ResultBox
                        onClick={() => setVal(data.username)}
                        height={height}
                        key={data.user_id}
                    >
                        <IconBox>
                            <BsSearch />
                        </IconBox>
                        <ResultId>{data.username}</ResultId>
                    </ResultBox>
                )
            );
        });

    return (
        <SearchContainer space={space}>
            <TextInput
                width={width}
                height={height}
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
