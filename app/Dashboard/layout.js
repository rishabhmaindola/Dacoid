import React from 'react'
import Navbar from '../components/Navbar'

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col w-full h-screen ">
            <main className="flex z-10 ">{children}</main>
            <div className='fixed bottom-0 w-full z-20'>
                <Navbar />
            </div>
        </div>
    );
};

export default Layout;
