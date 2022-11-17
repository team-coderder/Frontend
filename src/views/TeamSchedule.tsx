import React from 'react';
import { FiSettings } from 'react-icons/fi';

import { Button, Member } from '../components';
import {
    Container,
    Header,
    SubHeader,
    AlignRight,
    Field,
    MarginRight,
} from '../styles/globalStyle/PageLayout';
import { Schedule } from '../styles/schedule/schedule';

const TeamSchedule = () => {
    return (
        <Container>
            <Header>
                <h1>그룹 이름</h1>
                <FiSettings
                    size="24"
                    style={{ marginLeft: '10px', cursor: 'pointer' }}
                />
            </Header>
            <AlignRight>
                <Button height="2.5rem">그룹 스케줄 수정</Button>
            </AlignRight>
            <Schedule />
            <SubHeader>그룹원</SubHeader>
            <Field>
                <Member backgroundColor="main">나</Member>
            </Field>
            <SubHeader>보기모드</SubHeader>
            <Field>
                <MarginRight>
                    <Button
                        width="5rem"
                        height="2.5rem"
                        color="black"
                        backgroundColor="gray"
                    >
                        색깔로
                    </Button>
                </MarginRight>
                <Button
                    width="5rem"
                    height="2.4rem"
                    color="black"
                    backgroundColor="gray"
                >
                    진하게
                </Button>
            </Field>
        </Container>
    );
};

export default TeamSchedule;
