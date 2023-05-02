import React from 'react';
import Menu from './components/menu/Menu';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <main>
            <Menu></Menu>
            <Outlet></Outlet>
        </main>
    );
};

export default Main;