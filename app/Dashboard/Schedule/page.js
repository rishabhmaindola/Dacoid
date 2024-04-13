"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GrFormPrevious } from 'react-icons/gr'
import Calendar from '@/app/components/Calender'
import plus from '../../assets/plus.png'

const page = () => {
    const [showNoteForm, setShowNoteForm] = useState(false);
    const [selectedTime, setSelectedTime] = useState('');
    const [noteText, setNoteText] = useState('');
    const [notes, setNotes] = useState([]);
    const times = ['3:00 am','4:00 am','5:00 am','6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm','6:00 pm', '7:00 pm', '8:00 pm', '9:00 pm ','10:00 pm', '11:00 pm','12:00 am','1:00 am','2:00 am'];

    const handleAddNote = () => {
        setShowNoteForm(true);
    };

    const handleTimeChange = (time) => {
        setSelectedTime(time);
    };

    const handleNoteTextChange = (e) => {
        setNoteText(e.target.value);
    };

    const handleConfirmNote = () => {
        // const formattedNote = `${selectedTime}: ${noteText}`;
        console.log(`${selectedTime}: ${noteText}`);
        const newNote = { time: selectedTime, text: noteText };
        setNotes([...notes, newNote]);
        setShowNoteForm(false);
        setNoteText('');
        setSelectedTime('');
    };
    

    return (
        <div className='flex flex-col w-full gap-3 h-screen items-center'>
            <div className='flex relative w-full mt-5 items-center justify-center '>
                <Link href='/Dashboard' className='flex absolute mx-5 p-0.5 bg-slate-300 left-0'><GrFormPrevious /></Link>
                <h1 className='font-bold text-lg' >Workout Schedule</h1>
            </div>
            <div className='flex w-full items-center justify-center'>
                <Calendar handleNotes={notes} />
            </div>
            <div onClick={handleAddNote} className='fixed bottom-20 right-10 flex w-12 h-12 mb-20 rounded-full bg-purple-400 items-center justify-center' >
                <Image src={plus} alt='plus icon to add task' />
            </div>
            {showNoteForm && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <div className="flex flex-col w-full  lg:w-[50%] bg-white p-5  rounded-lg m-5 items-center justify-center">
                        <textarea className="w-full h-40 border border-gray-300 rounded-lg p-3 mb-3" placeholder="Add your note..." value={noteText} onChange={handleNoteTextChange}></textarea>
                        <select className="w-full h-[10%] border text-md border-gray-300 rounded-lg p-3 m-2" onChange={(e) => handleTimeChange(e.target.value)} value={selectedTime}>
                            <option className='flex flex-col text-sm' value="">Select Time</option>
                            {times.map((time, index) => (
                                <option key={index} value={time} className='flex flex-col text-sm'>{time}</option>
                            ))}
                        </select>
                        <span className='flex w-full gap-2 items-center justify-center'>
                            <button className="w-[40%] self-start px-4 py-2 bg-purple-400 text-white rounded-lg" onClick={handleConfirmNote}>Add Note</button>
                            <button className="w-[40%] self-start px-4 py-2 bg-red-400 text-white rounded-lg" onClick={() => setShowNoteForm(false)}>Cancel</button>
                        </span>
                    </div>
                </div>
            )}
            <div className="w-full px-5 mt-5">
                {notes.map((note, index) => (
                    <div key={index} className="bg-gray-100 p-3 rounded-lg mb-2">
                        <p className="text-sm">{note.time}: {note.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page