import React from 'react';
import NavbarLayout from '../layouts/NavbarLayout';
import { Login, Signup, AddGroup } from '../views';

const mainRoutes = () => {
    return [
        {
            // element: <NavbarLayout />,
            path: '/',
            children: [
                {
                    path: 'login',
                    element: <Login />,
                },
                {
                    path: 'signup',
                    element: <Signup />,
                },
            ],
        },
        {
            element: <NavbarLayout />,

            children: [
                {
                    path: '/addGroup',
                    element: <AddGroup />,
                },
            ],
        },
    ];
};

export default mainRoutes;
