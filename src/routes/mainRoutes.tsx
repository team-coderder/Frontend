import React from 'react';

const mainRoutes = () => {
    return {
        path: '/',
        // element: <Test />,
        children: [{ path: '' }],
    };
};

export default mainRoutes;
