import React from 'react';
import NavbarLayout from '../layouts/NavbarLayout';
import { Login, Signup, MySchedule } from '../views';

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
                path: '/myschedule',
                element: <MySchedule />,
            },
        ],
    };
};

export default mainRoutes;
