import React from 'react';
import NavbarLayout from '../layouts/NavbarLayout';
import { Login, Signup, AddGroup } from '../views';

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
                path: '/addGroup',
                element: <AddGroup />,
            },
        ],
    };
};

export default mainRoutes;
