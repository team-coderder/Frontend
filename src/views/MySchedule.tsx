import React from 'react';
import styled from '@emotion/styled';

import { Button } from '../components';

const Container = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 150px;
`;
const Header = styled.div`
    color: #fff;
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

const MySchedule = () => {
  return (
        <Container>
            <Header>
                <h1>내 스케쥴</h1>
            </Header>
            <AlignRight>
                <Button>내 스케줄 수정</Button>
            </AlignRight>
            <Schedule />
        </Container>
  )
};

export default MySchedule;
