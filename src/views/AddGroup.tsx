import React from 'react';
import Member from '../components/Member';
import TextInput from '../components/TextInput';
import { generateColor } from '../hooks/ColorMethod';
import {
    AddGroupContainer,
    Header,
    InputContainer,
    InputBox,
    MemberBox,
} from '../styles/member/member';

const dummy = ['강정구', '진지연', '송민진', '임지우', '권영재', 'f'];

const AddGroup = () => {
    return (
        <AddGroupContainer>
            <Header>
                <h1>그룹 생성하기</h1>
            </Header>
            <InputContainer>
                그룹 이름
                <InputBox>
                    <TextInput placeholder="그룹 이름을 입력해주세요." />
                </InputBox>
            </InputContainer>
            <InputContainer>
                멤버 추가
                <InputBox>
                    <TextInput placeholder="ID 검색" />+
                </InputBox>
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
                        {' : ' + generateColor(x)}
                    </Member>
                ))}
            </MemberBox>
        </AddGroupContainer>
    );
};

export default AddGroup;
