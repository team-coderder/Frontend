import React from 'react';
import Signup from '../views/Signup';

const mainRoutes = () => {
    return {
        path: '/',
        children: [
            { path: '' },
            {
                path: '/signup',
                element: <Signup />,
            },
        ],
    };
};

export default mainRoutes;
