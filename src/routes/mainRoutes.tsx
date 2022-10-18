import React from 'react';
import Test from '../views/Test';

const mainRoutes = () => {
    return {
        path: '/',
        element: <Test />,
        children: [{ path: '' }],
    };
};

export default mainRoutes;
