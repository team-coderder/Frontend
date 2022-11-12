import React from 'react';
import styled from '@emotion/styled';
import { FiSettings } from 'react-icons/fi';

import { Button, Member } from '../components';

const Container = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 150px;
`;
const Header = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    & svg {
        display: block;
        margin-left: 10px;
        cursor: pointer;
    }
`;
const AlignRight = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const Schedule = styled.div`
    height: 300px;
    background-color: #eee;
    margin: 20px 0;
`;
const Field = styled.div`
    margin-bottom: 20px;
    & h2 {
        margin-bottom: 8px;
        color: #fff;
        font-size: 1.2rem;
    }
`;
const MarginRight = styled.div`
    margin-right: 10px;
    display: inline-block;
`;

const TeamSchedule = () => {
  return (
        <Container>
            <Header>
                <h1>그룹 이름</h1>
                <FiSettings size="24" />
            </Header>
            <AlignRight>
                <Button height="2.5rem">그룹 스케줄 수정</Button>
            </AlignRight>
            <Schedule />
            <Field>
                <h2>그룹원</h2>
                <Member backgroundColor="main">나</Member>
            </Field>
            <Field>
                <h2>보기모드</h2>
                <MarginRight>
                    <Button width="5rem" height="2.5rem" color="black" backgroundColor='gray'>색깔로</Button>
                </MarginRight>
                <Button width="5rem" height="2.4rem" color="black" backgroundColor='gray'>진하게</Button>
            </Field>
        </Container>
  )
};

export default TeamSchedule;
