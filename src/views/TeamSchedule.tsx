import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FiSettings } from 'react-icons/fi';
import { Button, Member } from '../components';
import { generateColor } from '../hooks/ColorMethod';
import {
    Container,
    Header,
    SubHeader,
    AlignRight,
    Field,
    MarginRight,
} from '../styles/globalStyle/PageLayout';
import { DayPilot, DayPilotCalendar } from '@daypilot/daypilot-lite-react';

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

const dumID = '권영재';

const TeamSchedule: React.FC = () => {
    // const [myEvents, setEvents] = React.useState<MbscCalendarEvent[]>([]);

    // const onEventClick = React.useCallback((event) => {
    //     toast({
    //         message: event.event.title,
    //     });
    // }, []);

    const calendarRef: any = React.createRef();
    console.log(calendarRef);
    const startDate = DayPilot.Date.today();
    // dp.update({ startDate, events: data });
    const state = {
        viewType: 'Week',
        durationBarVisible: false,
        timeRangeSelectedHandling: 'Enabled',
        onTimeRangeSelected: async (args) => {
            console.log('args : ', args);
            const dp = args.control;
            const modal = await DayPilot.Modal.prompt(
                'Create a new event:',
                'Event 1',
            );
            dp.clearSelection();
            if (!modal.result) {
                return;
            }
            dp.events.add({
                start: args.start,
                end: args.end,
                id: DayPilot.guid(),
                text: modal.result,
            });
            console.log(args.start);
            console.log(args.end);
        },
        eventDeleteHandling: 'Update',
        onEventClick: async (args) => {
            const dp = args.control;
            const modal = await DayPilot.Modal.prompt(
                'Update event text:',
                args.e.text(),
            );
            if (!modal.result) {
                return;
            }
            const e = args.e;
            e.data.text = modal.result;
            dp.events.update(e);
        },
    };

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
            <div style={{ flexGrow: '1' }}>
                <DayPilotCalendar
                    days={7}
                    startDate={DayPilot.Date.today()}
                    ref={calendarRef}
                    {...state}
                />
            </div>
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
