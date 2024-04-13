import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import home from '../assets/home.png'
import analytics from '../assets/analytics.png'
import search from '../assets/search.png'
import camera from '../assets/camera.png'
import profile from '../assets/profile.png'

const Navbar = () => {
    return (
        <div className='flex relative w-full py-5 bg-white '>
            <span className='flex  w-full items-center justify-between'>
                <ul className='flex w-[35%]  items-center justify-between'>
                    <li className='p-5'>
                        <Link href='/' className='w-full' ><Image src={home} alt='home page icon for navbar' /></Link>
                    </li>
                    <li className=' p-5'><Link href='/Dashboard/Schedule' className='w-full' >
                        <Image src={analytics} alt='analytics page icon for navbar' /></Link>
                    </li>
                </ul>
                <Link href='/' className='flex w-full absolute -top-8 justify-center' ><Image src={search} alt='Search page icon for navbar' /></Link>
                <ul className='flex w-[35%]  items-center justify-between'>
                    <li className='p-5'> <Link href='/Dashboard/Goals' className='w-full' >
                        <Image src={camera} alt='samera page icon for navbar' /></Link>
                    </li>
                    <li className='p-5'><Link href='/Dashboard/Tracker' className='w-full' >
                        <Image src={profile} alt='profile page icon for navbar' /></Link>
                    </li>
                </ul>
            </span>
        </div>
    )
}

export default Navbar