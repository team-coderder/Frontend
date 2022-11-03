import React from 'react';
import Login from '../views/Login';
import Signup from '../views/Signup';

const mainRoutes = () => {
    return {
        path: '/',
        children: [
            { path: '' },
            {
                path: '/login',
                element: <Login />,
            },
            { path: '/signup', element: <Signup /> },
        ],
    };
};

export default mainRoutes;
