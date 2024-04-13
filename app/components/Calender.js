"use client"
import React, { useState } from 'react'
import { GrFormPrevious } from 'react-icons/gr'
import { MdNavigateNext } from 'react-icons/md'

const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
};

const Calendar = ({ handleNotes }) => {
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [selectedDate, setSelectedDate] = useState(null);
    // const renderDaysOfWeek = (dayOfWeek) => {
    //     const startDate = new Date(selectedYear, selectedMonth, 1);
    //     const days = [];
    //     for (let i = 0; i < 7; i++) {
    //         const date = new Date(startDate);
    //         date.setDate(startDate.getDate() + i);
    //         if (date.toLocaleDateString('en-US', { weekday: 'short' }) === dayOfWeek) {
    //             days.push(date.getDate());
    //         }
    //     }
    //     return days.map((day, index) => (
    //         <div key={index}>{day}</div>
    //     ));
    // };

    const renderDatesOfMonth = () => {

        const numDays = daysInMonth(selectedMonth, selectedYear);
        const dates = [];
        for (let i = 1; i <= numDays; i++) {
            dates.push(i);
        }

        const handleDateClick = (date) => {
            setSelectedDate(date);
            console.log(date, selectedMonth, selectedYear);
        };


        return (
            <div className="flex items-center justify-center rounded-md flex-nowrap ">
                {dates.map((date, index) => (
                    <div key={index} className={`flex flex-col items-center mr-4 px-5 p-1 pb-5 cursor-pointer ${selectedDate === date ? 'bg-gradient-to-r from-blue-300 to-blue-500 rounded-lg text-white' : ''}`} onClick={() => handleDateClick(date)}>
                        <span className='font-bold text-md'>{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date(selectedYear, selectedMonth, date).getDay()]}</span>
                        <span className='text-3xl mt-1'>{date}</span>
                    </div>
                ))}
            </div>
        );
    };

    const renderNotesForTime = (hour) => {
        const filteredNotes = handleNotes.filter(note => note.time === `${hour}:00 am` || note.time === `${hour}:00 pm`);

        return filteredNotes.map((note, index) => (
            <div key={index} className="bg-gray-100 p-3 rounded-lg mb-2">
                <p className="text-sm">{note.text}{note.time}</p>
            </div>
        ));
    };

    return (
        <div className="flex flex-col items-center justify-center overflow-hidden">
            <div className="flex mb-4 items-center justify-center">
                <button className="mr-2" onClick={() => setSelectedMonth(prev => (prev === 0 ? 11 : prev - 1))}><GrFormPrevious /></button>
                <span>{new Date(selectedYear, selectedMonth).toLocaleDateString(undefined, { month: 'long', year: 'numeric' })}</span>
                <button className="ml-2" onClick={() => setSelectedMonth(prev => (prev === 11 ? 0 : prev + 1))}><MdNavigateNext /></button>
            </div>
            <div className='flex w-full p-5 overflow-x-auto '>
                {renderDatesOfMonth()}
            </div>
          
            <div className='w-full h-1/2 mt-10'>
                {selectedDate !== null && (
                    <div className="flex flex-col w-full">
                        <div className='flex flex-col bg-white gap-3 '>
                            {[...Array(24).keys()].map(hour => {
                                const displayHour = (hour < 12) ? (hour === 0 ? 12 : hour) : (hour === 12 ? 12 : hour - 12);
                                const ampm = (hour < 12) ? 'am' : 'pm';
                                return (
                                    <React.Fragment key={hour}>
                                        <h2 className='px-3'>{displayHour < 10 ? `0${displayHour}:00` : `${displayHour}:00`} {ampm}</h2>
                                        <div className="flex h-px bg-black" />
                                        <div className="w-full px-5 mt-5">
                                            {renderNotesForTime(displayHour)}
                                        </div>
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Calendar;