import React from 'react';
import NavbarLayout from '../layouts/NavbarLayout';
import { Login, Signup, TeamSchedule } from '../views';

const mainRoutes = () => {
    return {
        element: <NavbarLayout />,
        children: [
            { path: '/' },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <Signup />,
            },
            {
                path: '/teamschedule',
                element: <TeamSchedule />,
            },
        ],
    };
};

export default mainRoutes;
