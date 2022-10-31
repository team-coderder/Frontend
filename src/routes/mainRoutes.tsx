import React from 'react';
import Login from '../views/Login';

const mainRoutes = () => {
    return {
        path: '/',
        children: [
            { path: '' },
            {
                path: '/login',
                element: <Login />,
            },
        ],
    };
};

export default mainRoutes;
