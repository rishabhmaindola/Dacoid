"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import image1 from './assets/fs1.png';
import image2 from './assets/fs2.png';
import { MdNavigateNext } from 'react-icons/md';
import Link from 'next/link';

const page = () => {
    const [activeScreen, setActiveScreen] = useState(1);

    const handleNext = () => {
        setActiveScreen((prevScreen) => prevScreen === 1 ? 2 : 1);
    };

    return (
        <div className='gap-10'>
            <div className='flex w-full justify-end'>
                <Link href='/Auth' className='flex p-5 text-blue-400 rounded-full underline cursor-pointer'>Skip</Link>
            </div>
            {activeScreen === 1 && (
                <div className='flex flex-col w-full  items-center justify-center '>
                    <div className='flex flex-col gap-5 itmes-center justify-center'>
                        <Image src={image1} className='self-center' />
                        <span className='flex flex-col p-5'>
                            <h1 className='font-bold '>Track Your Goals</h1>
                            <p className='font-montserrat'>
                                Don&apos;t worry if you have trouble determining your goals, We can help you determine your goals and track your goals.
                            </p>
                        </span>
                    </div>
                </div>
            )}
            {activeScreen === 2 && (
                <div className='flex flex-col w-full items-center justify-center '>
                    <div className='flex flex-col gap-5 itmes-center justify-center'>
                        <Image src={image2} className='self-center' />
                        <span className='flex flex-col p-5'>
                            <h1 className='font-bold '>Get Burn</h1>
                            <p className='font-montserrat'>
                                Let&apos;s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever
                            </p>
                        </span>
                    </div>
                </div>
            )}
            <div className='flex w-full mt-20 justify-end'>
                <button onClick={handleNext} className='flex self-end p-3 m-3 text-white bg-gradient-to-r from-white to-slate-400 rounded-full cursor-pointer'><MdNavigateNext /></button>
            </div>
        </div>
    );
};

export default page;