import React from "react";

import {
    createBrowserRouter,
} from "react-router";
import Root from "../pages/Root/Root.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import BookDetails from "../pages/BookDetails/BookDetails.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
       Component:Root,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                index:true,
                path:"/",
                Component:Home,
            },
            {
              path:'/about',
                Component:About,
            },
            {
              path:'/bookDetails/:id',
              Component:BookDetails,
            }
        ]
    },
]);