"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
// import { FaGoogle } from 'react-icons/fa'
// import { FaFacebookF } from 'react-icons/fa'
import { IoMdEye } from 'react-icons/io'
import { IoMdEyeOff } from 'react-icons/io'
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'

const Page = () => {

    const router = useRouter();
    const [authToggle, setAuthToggle] = useState(true);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleSignup = () => {
        router.push('/Dashboard');
    };

    const handleLogin = () => {
        router.push('/Dashboard');
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            {authToggle ? (
                <div className='flex flex-col w-full h-screen items-center'>
                    <div className='w-full lg:w-[35%]' >
                        <div className='flex flex-col gap-10  p-5 mt-10'>
                            <h1 className='font-bold text-xl' >Create an Account</h1>
                            <span className='flex flex-col w-full gap-5'>
                                <input type='text' value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder='First Name' className='p-3 px-5 rounded-md w-full  outline-none  bg-slate-300' />
                                <input type='text' value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder='Last Name' className='p-3 px-5 rounded-md w-full  outline-none  bg-slate-300' />
                                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='p-3 px-5 rounded-md w-full  outline-none  bg-slate-300' />
                                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='p-3 px-5 rounded-md w-full  outline-none  bg-slate-300' />
                            </span>
                            <span className='flex gap-2 w-full'>
                                <input type='checkbox' className='h-5 w-5' />
                                <h2 className='flex text-xs gap-2'>By proceeding, I agree to all<h3 className='underline text-blue-400'> T&C</h3> and <h3 className='underline text-blue-400'>Privacy Policy</h3></h2>
                            </span>
                        </div>
                        <div className='flex flex-col gap-10 p-5 mt-auto items-center justify-center '>
                            <button onClick={handleSignup} className='w-full text-white p-5 rounded-lg bg-blue-400'>Create An Account</button>
                            <span className='flex w-full items-center gap-2'>
                                <div className="flex-1 h-px bg-black" />
                                <p>or</p>
                                <div className="flex-1 h-px bg-black"></div>
                            </span>
                            <span className='flex gap-3'>
                                <span className='flex-1 border-black p-3 border-2 rounded-md' >
                                    {/* <FaGoogle /> */}
                                    <Image src={google} alt='google icon' />
                                </span>
                                <span className='flex-1 border-black p-3 border-2 rounded-md' >
                                    {/* <FaFacebookF /> */}
                                    <Image src={facebook} alt='facebook icon' />
                                </span>
                            </span>
                            <h2 className='flex text-xs gap-2 cursor-pointer'>Already have an account?<h3 onClick={() => setAuthToggle(false)} className='underline text-blue-400'>Login</h3></h2>
                        </div>
                    </div>
                </div>

            ) : (

                <div className='flex flex-col w-full h-screen items-center'>
                <div className='w-full lg:w-[35%]' >
                    <div className='flex flex-col gap-10 p-5 mt-10'>
                        <h1 className='font-bold text-xl' >Welcome Back</h1>
                        <span className='flex flex-col w-full gap-5'>
                            <input type='text' placeholder='Email ' className='p-3 px-5 rounded-md w-full  outline-none  bg-slate-300' />
                            <span className='flex px-2 rounded-md w-full bg-slate-300 items-center justify-between' >
                                <input type={showPassword ? 'text' : 'password'} placeholder='Password' className=' p-3 px-3 outline-none  bg-slate-300' />
                                {showPassword == true ? (<IoMdEye onClick={handleShowPassword} />) : (<IoMdEyeOff onClick={handleShowPassword} />)}
                            </span>
                        </span>
                        <span className='flex gap-2 w-full'>
                            <h2 className='flex text-xs gap-2 underline'>Forgot your password?</h2>
                        </span>
                    </div>
                    <div className='flex flex-col gap-10 w-full p-5 mt-auto items-center justify-center '>
                        <button onClick={handleLogin} className='w-full text-white p-5 rounded-lg bg-blue-400'>Sign In</button>
                        <span className='flex w-full items-center gap-2'>
                            <div className="flex-1 h-px bg-black" />
                            <p>or</p>
                            <div className="flex-1 h-px bg-black"></div>
                        </span>
                        <span className='flex gap-3'>
                            <span className='flex-1 border-black p-3 border-2 rounded-md' >
                                {/* <FaGoogle /> */}
                                <Image src={google} alt='google icon' />
                            </span>
                            <span className='flex-1 border-black p-3 border-2 rounded-md' >
                                {/* <FaFacebookF /> */}
                                <Image src={facebook} alt='facebook icon' />
                            </span>
                        </span>
                        <h2 className='flex text-xs gap-2 cursor-pointer'>Don&apos;t have an account,yet?<h3 onClick={() => setAuthToggle(true)} className='underline text-blue-400'>Create an account</h3></h2>
                    </div>
                    </div>
                </div>
            )}
        </>

    )
}

export default Page
