import React from 'react';
import AddGroup from '../views/AddGroup';

const mainRoutes = () => {
    return {
        path: '/',
        children: [
            { path: '' },
            {
                path: '/addGroup',
                element: <AddGroup />,
            },
        ],
    };
};

export default mainRoutes;
