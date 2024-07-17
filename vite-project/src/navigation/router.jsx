import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../pages/home.jsx";
import About from "../pages/about.jsx";

export const routes = {HOME: '/', ABOUT: '/about'};

const router = createBrowserRouter([
    {path: routes.HOME, element: <Home/>, children: [{path: routes.ABOUT, element: <About/>}]},
]);

export const Routes = () => {
    return <RouterProvider router={router}/>;
};

