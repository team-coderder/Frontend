import React from 'react';
import { Navbar } from '../components';
import Member from '../components/Member';
import TextInput from '../components/TextInput';
import { Header, InputBox, MemberBox } from '../styles/member/member';

const dummy = ['a', 'b', 'c', 'd'];

const AddGroup = () => {
    return (
        <>
            <Header>
                <h1>그룹 생성하기</h1>
            </Header>
            <InputBox>
                그룹 이름
                <TextInput
                    marginLeft="20px"
                    width="100%"
                    placeholder="그룹 이름을 입력해주세요."
                />
            </InputBox>
            <InputBox>
                멤버 추가
                <TextInput width="100%" placeholder="ID 검색" />+
            </InputBox>
            <MemberBox>
                {dummy.map((x) => (
                    <Member backgroundColor="sub" color="black" disable={true}>
                        {x}
                    </Member>
                ))}
            </MemberBox>
        </>
    );
};

export default AddGroup;
