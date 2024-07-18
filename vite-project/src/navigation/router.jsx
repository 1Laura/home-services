import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../pages/home.jsx";
import About from "../pages/about.jsx";
import Login from "../pages/login.jsx";
import Register from "../pages/Register.jsx";
import NotFound from "../pages/notFound.jsx";
import Services from "../pages/services.jsx";
import Search from "../components/search.jsx";

export const routes = {
    HOME: '/',
    ABOUT: '/about',
    LOGIN: '/login',
    REGISTER: '/register',
    NOT_FOUND: '/not-found',
    SERVICES: '/services',
    CATEGORY_PAGE: {path: '/search/:category',
    url:(categoryId) => `/search/${categoryId}`,},
};

const router = createBrowserRouter([
    {path: routes.HOME, element: <Home/>, children:
            [
                {path: routes.ABOUT, element: <About/>},
                {path: routes.LOGIN, element: <Login/>},
                {path:routes.REGISTER, element:<Register/>},
                {path:routes.NOT_FOUND, element:<NotFound/>},
                {path:routes.SERVICES, element:<Services/>},
                {path:routes.CATEGORY_PAGE.path, element:<Search/>},
            ]},
]);

export const Routes = () => {
    return <RouterProvider router={router}/>;
};

