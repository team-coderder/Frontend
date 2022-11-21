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
import { DayPilot, DayPilotCalendar } from '@daypilot/daypilot-lite-react';
import { generateColor } from '../hooks/ColorMethod';
const data = [
    {
        id: 1,
        start: DayPilot.Date.today().addHours(10),
        end: DayPilot.Date.today().addHours(11),
        text: 'Event 1',
    },
    {
        id: 2,
        start: DayPilot.Date.today().addHours(13),
        end: DayPilot.Date.today().addHours(16),
        text: 'Event 2',
    },
];

const TeamSchedule = () => {
    // const dp = this.calendar;

    // dp.update({ events: data });
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
            <DayPilotCalendar
                durationBarVisible={false}
                viewType="day"
                days={7}
                startDate={DayPilot.Date.today()}
            />
            <SubHeader>그룹원</SubHeader>
            <Field>
                <Member backgroundColor={generateColor('나')}>나</Member>
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
