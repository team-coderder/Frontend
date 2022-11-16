import React, { useRef, useState } from 'react';
import Member from '../components/Member';
import SearchID from '../components/SearchID';
import TextInput from '../components/TextInput';
import { generateColor } from '../hooks/ColorMethod';
import {
    AddGroupContainer,
    Header,
    InputContainer,
    InputBox,
    MemberBox,
} from '../styles/member/member';
import { BsPlusCircle } from 'react-icons/bs';
import { useEffect } from 'react';

const dummy = ['강정구', '진지연', '송민진', '임지우', '권영재', 'f', '관 우'];

const AddGroup = () => {
    const [focus, setFocus] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (
                searchRef.current &&
                !searchRef.current.contains(event.target as Node)
            ) {
                setFocus(false);
                console.log('hi');
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [searchRef]);

    return (
        <AddGroupContainer>
            <Header>
                <h1>그룹 생성하기</h1>
            </Header>
            <InputContainer className="groupName">
                그룹 이름
                <InputBox>
                    <TextInput
                        height="30px"
                        placeholder="그룹 이름을 입력해주세요."
                    />
                </InputBox>
            </InputContainer>
            <InputContainer className="addMember">
                멤버 추가
                <InputBox>
                    <SearchID ref={searchRef} height="30px" />
                </InputBox>
                <BsPlusCircle
                    className="plusBtn"
                    onClick={() => {
                        console.log('clicked!');
                    }}
                />
            </InputContainer>
            <MemberBox>
                {dummy.map((x, idx) => (
                    <Member
                        key={idx}
                        space={5}
                        backgroundColor={generateColor(x)}
                        color="white"
                        disable={true}
                    >
                        {x}
                        {/* {' : ' + generateColor(x)} */}
                    </Member>
                ))}
            </MemberBox>
        </AddGroupContainer>
    );
};

export default AddGroup;
