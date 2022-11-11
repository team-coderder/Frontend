import React from 'react';
import NavbarLayout from '../layouts/NavbarLayout';
import { Login, Signup } from '../views';

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
        ],
    };
};

export default mainRoutes;
