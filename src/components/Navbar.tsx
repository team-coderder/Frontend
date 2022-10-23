import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Menubar, Modal } from '.';
import { BsBell } from 'react-icons/bs';

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ffe;
    font-size: 1.5rem;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
`;
const Profile = styled.div`
    text-align: right;
`;
const Name = styled.div`
    font-size: 1.2rem;
`;
const Id = styled.div`
    line-height: 1.2rem;
    font-size: 0.8rem;
`;

const _user = {
    username: 'johnwick39856765757',
    password: 'wick1234',
    nickname: 'wick',
};

function Navbar() {
    const [toggleProfile, setToggleProfile] = useState(false);
    const [toggleAlarm, setToggleAlarm] = useState(true);

    const handleToggle = (e: React.FormEvent, label: string) => {
        if (label === 'profile') {
            setToggleProfile(!toggleProfile);
            setToggleAlarm(false);
        } else {
            setToggleAlarm(!toggleAlarm);
            setToggleProfile(false);
        }
    };
    return (
        <Menubar align_end>
            <Modal
                label="alarm"
                icon={
                    <Icon>
                        <BsBell />
                    </Icon>
                }
                toggle={toggleAlarm}
                handleToggle={handleToggle}
            >
                내부
            </Modal>
            <Profile>
                <Name>{_user.nickname}</Name>
                <Id>{_user.username}</Id>
            </Profile>
            <Modal
                label="profile"
                icon={<Icon>{_user.nickname[0].toUpperCase()}</Icon>}
                toggle={toggleProfile}
                handleToggle={handleToggle}
            >
                <button>로그아웃</button>
            </Modal>
        </Menubar>
    );
}

export default Navbar;
