import React from 'react';
import styled from '@emotion/styled';

import { TextInput, Button, Member } from '../components';

const Container = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 150px;
`;
const Header = styled.div`
    color: #fff;
`;
const Main = styled.div`
    margin-top: 50px;
`;
const Field = styled.div`
    height: 2.5rem;
    display: flex;
    align-items: center;
    margin: 20px 0;
`;
const FieldName = styled.div`
    color: #fff;
    width: 100px;
`;

const GroupInfo = () => (
    <Container>
        <Header>
            <h1>그룹 정보 수정</h1>
        </Header>
        <Main>
            <Field>
                <FieldName>그룹 이름</FieldName>
                <TextInput height="2rem" margin="0 20px 0 0" />
                <Button height="100%" width="9em">
                    수정하기
                </Button>
            </Field>
            <Field>
                <FieldName>멤버 관리</FieldName>
                <TextInput height="2rem" placeholder="ID 검색" />
            </Field>
            <Field>
                <FieldName></FieldName>
                <Member backgroundColor="main" height="100%" width="7em" space={5}>홍길동</Member>
                <Member backgroundColor="main" height="100%" width="7em" space={5}>아바타</Member>
            </Field>
            <Field>
                <FieldName>그룹 삭제</FieldName>
                <Button height="100%" width="9em">
                    그룹 삭제
                </Button>
            </Field>
            <Field>
                <FieldName>그룹 탈퇴</FieldName>
                <Button height="100%" width="9em">
                    그룹 탈퇴
                </Button>
            </Field>
        </Main>
    </Container>
);

export default GroupInfo;
