import React from 'react';
import NavbarLayout from '../layouts/NavbarLayout';
import { Login, Signup, GroupInfo } from '../views';

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
                path: '/groupinfo',
                element: <GroupInfo />,
            },
        ],
    };
};

export default mainRoutes;
