import React from 'react';
import styled from '@emotion/styled';

import { TextInput, Button, Member } from '../components';

const Container = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 150px;
`;
const Main = styled.div`
    margin-top: 50px;
`;
const Field = styled.div`
    display: flex;
    margin: 1rem 0;
`;
const FieldName = styled.div`
    line-height: 2rem;
    text-align: center;
    width: 100px;
    text-align: left;
`;

const _users = [
    {
        "user_id" : "1",
        "username": "molisee123",
        "nickname": "molisee"
    },
    {
        "user_id" : "2",
        "username": "tousles22",
        "nickname": "jours"
    },
];
const _team_members = [
    {
        "memberId": 2,
        "username": "gildong",
        "nickname": "홍길동",
        "teamRole": "FOLLOWER"
    },
    {
        "memberId": 3,
        "username": "bata",
        "nickname": "바타",
        "teamRole": "FOLLOWER"
    },
];

const GroupInfo = () => (
    <Container>
        <h1>그룹 정보 수정</h1>
        <Main>
            <Field>
                <FieldName>그룹 이름</FieldName>
                <TextInput height="100%" width="60em" />
                <Button height="2em" width="9em">
                    수정하기
                </Button>
            </Field>
            <Field>
                <FieldName>멤버 관리</FieldName>
                <TextInput height="100%" width="60em" placeholder="ID 검색">
                    {/* <Field>
                        {_users?.map((user, index) => (
                            <>
                                <input
                                    key={index}
                                    disabled
                                    value={user.username}
                                />
                                <Button height="2em" width="9em">
                                    추가하기
                                </Button>
                            </>
                        ))}
                    </Field> */}
                </TextInput>
            </Field>
            <Field>
                <FieldName></FieldName>
                {_team_members?.map((member, index) => (
                    <>
                        <Member
                            key={index}
                            backgroundColor="main"
                            height="2em"
                            width="7em"
                            space={5}
                        >
                            {member.username}
                        </Member>
                    </>
                ))}
            </Field>
            <Field>
                <FieldName>그룹 삭제</FieldName>
                <Button height="2em" width="9em">
                    그룹 삭제
                </Button>
            </Field>
            <Field>
                <FieldName>그룹 탈퇴</FieldName>
                <Button height="2em" width="9em">
                    그룹 탈퇴
                </Button>
            </Field>
        </Main>
    </Container>
);

export default GroupInfo;
