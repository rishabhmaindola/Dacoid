import React from 'react'
import Image from 'next/image'
import { GrFormPrevious } from 'react-icons/gr'
import alert from '../../assets/alert.png'
import workout1 from '../../assets/fullbodyworkout.png'
import workout2 from '../../assets/upperbodyworkout.png'
import workout3 from '../../assets/workout2.png'
import graph from '../../assets/graph.png'

const page = () => {
    return (
        <div className='flex flex-col w-full gap-3 h-screen items-center'>
            <div className='flex relative w-full mt-5 items-center justify-center '>
                <button className='flex absolute mx-5 p-0.5 bg-slate-300 left-0'><GrFormPrevious /></button>
                <h1 className='font-bold text-lg' >Workout Tracker</h1>
            </div>
            <div className='flex w-full mt-10 items-center justify-center'>
                <Image src={graph} alt='graph for dashboard' />
            </div>
            <span className='flex m-5 p-2 gap-2 rounded-md items-center bg-gradient-to-r from-slate-300 to-white'>
                <Image src={alert} alt='Alert Icon for dashboard page' />
                <p>You&apos;ve burned fewer calories than yesterday. Time to get moving </p>
            </span>
            <div className='flex w-full p-5 items-center justify-between'>
                <h1 className='font-bold text-xl' >Upcoming Workout</h1>
                <h2 className='text-slate-400'>see more</h2>
            </div>
            <div className='flex flex-col w-full p-2 gap-5 items-center justify-center'>
                <div className='flex w-full  p-5 shadow-lg rounded-xl bg-white items-center justify-between'>
                    <span className='flex gap-2'>
                        <Image src={workout1} alt='Full body workout icon' />
                        <span>
                            <h1 className='text-md' >Full Body Workout</h1>
                            <h2 className='text-slate-400'>Today 3 pm</h2>
                        </span>
                    </span>
                    <button>switch</button>
                </div>
                <div className='flex w-full p-5 shadow-lg rounded-xl bg-white items-center justify-between'>
                    <span className='flex gap-2 '>
                        <Image src={workout2} alt='Full body workout icon' />
                        <span>
                            <h1 className='text-md' >Upper Body Workout</h1>
                            <h2 className='text-slate-400'>4 Feb, 3:30 pm </h2>
                        </span>
                    </span>
                    <button>switch</button>
                </div>
            </div>
            <div className='flex w-full p-5 items-center justify-between'>
                <h1 className='font-bold text-xl' >What Do You Want To Train</h1>
            </div>
            <div className='flex flex-col w-full items-center justify-center'>
                <div className='flex w-full p-5 shadow-lg rounded-xl bg-blue-300 items-center justify-between'>
                    <span className='flex w-full items-center justify-between'>
                        <span>
                            <h1 className='font-semibold text-md' >Full Body Workout</h1>
                            <h2>Arms</h2>
                            <h2>Chest</h2>
                        </span>
                        <Image src={workout3} alt='Full body workout icon' />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default page