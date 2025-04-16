import React from 'react';
import Navbar from "../../components/Header/Navbar.jsx";
import {Outlet} from "react-router";
import Footer from "../../components/Footer/Footer.jsx";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
