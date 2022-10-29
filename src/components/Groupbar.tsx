import React, { useState } from 'react';
import { Bar } from '.';
import { FiMenu } from 'react-icons/fi';
import { Icon } from '../styles/Icon';

const _groups = [
    {
        teamId: 2,
        name: '서울 9조',
    },
    {
        teamId: 3,
        name: '코테스터디 Algogazaa',
    },
    {
        teamId: 1,
        name: 'coderder',
    },
    {
        teamId: 19,
        name: '사이드프로젝트',
    },
];

function Groupbar() {
    const [toggleGroups, setToggleGroups] = useState(false);
    const toggle = () => setToggleGroups(!toggleGroups);

    return (
        <Bar vertical breadth={toggleGroups ? '15rem' : '3rem'}>
            <Icon>
                <FiMenu onClick={toggle} />
            </Icon>
            {_groups.map((group, index) => (
                <div key={index}>
                    {group.teamId}
                    {toggleGroups && group.name}
                </div>
            ))}
        </Bar>
    );
}

export default Groupbar;
