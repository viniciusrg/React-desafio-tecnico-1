import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Detalhes from './pages/detalhes';
import Home from './pages/home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/detalhes',
        element: <Detalhes />
    }
])