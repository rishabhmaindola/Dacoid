import React from 'react'

const page = () => {

    return (
        <div className='flex flex-col w-full h-full bg-white '>
            <div className='flex flex-col gap-10 w-full p-5 mt-10 items-center justify-center'>
                <h1 className='font-bold text-xl' >What are your goals?</h1>
                <span className='flex flex-col w-full gap-5'>
                    <h2 className='flex p-3 px-5 rounded-md w-full items-center justify-between bg-slate-300' >Weight Loss<input type='checkbox' className='h-5 w-5' /></h2>
                    <h2 className='flex p-3 px-5 rounded-md w-full items-center justify-between bg-slate-300' >Muscle Gain<input type='checkbox' className='h-5 w-5' /></h2>
                    <h2 className='flex p-3 px-5 rounded-md w-full items-center justify-between bg-slate-300' >Flexibility & Mobility<input type='checkbox' className='h-5 w-5' /></h2>
                    <h2 className='flex p-3 px-5 rounded-md w-full items-center justify-between bg-slate-300' >General Fitness<input type='checkbox' className='h-5 w-5' /></h2>
                    <h2 className='flex p-3 px-5 rounded-md w-full items-center justify-between bg-slate-300' >Event Specific Training<input type='checkbox' className='h-5 w-5' /></h2>
                    <h2 className='flex p-3 px-5 rounded-md w-full items-center justify-between bg-slate-300' >Mindfulness & Mental Health<input type='checkbox' className='h-5 w-5' /></h2>
                </span>
            </div>
            <div className='flex flex-col  w-full p-5 mt-10 items-center justify-center'>
                <button className='w-full text-white p-5  rounded-lg bg-blue-400'>Confirm</button>
            </div>
        </div>
    )
}

export default page