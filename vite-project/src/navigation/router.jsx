import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../pages/home.jsx";

export const routes = {HOME: '/'};

const router = createBrowserRouter([
    {path: routes.HOME, element: <Home/>},
]);


export const Routes = () => {
    return <RouterProvider router={router}/>;
};

