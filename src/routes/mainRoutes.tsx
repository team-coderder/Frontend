import React from 'react';

import NavbarLayout from '../layouts/NavbarLayout';
import { GroupInfo } from '../views';
import App from '../App';

const mainRoutes = () => {
    return {
        element: <NavbarLayout />,
        children: [
            {
                path: '/',
            },
        ],
    };
};

export default mainRoutes;
