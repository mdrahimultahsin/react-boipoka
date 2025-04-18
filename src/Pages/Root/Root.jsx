import React from 'react';
import Footer from '../../Components/Footer/Footer';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../../Components/Header/Navbar';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    const nevigation = useNavigation();
    const isNevigating = Boolean(nevigation.location)
    return (
        <div className='max-w-7xl mx-auto px-2'>
            <Navbar></Navbar>
            {isNevigating && <span>Loading...</span>}
            <div className='min-h-[calc(100vh-138px)]'>

            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default Root;