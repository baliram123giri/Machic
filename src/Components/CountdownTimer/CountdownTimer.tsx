"use client"
import React, { useState, useEffect } from 'react';
const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    function calculateTimeLeft() {
        const now: any = new Date();
        const targetDate: any = new Date(now);
        targetDate.setDate(now.getDate() + 5);
        targetDate.setHours(0, 0, 0, 0);

        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return {
            days: days < 10 ? `0${days}` : days,
            hours: hours < 10 ? `0${hours}` : hours,
            minutes: minutes < 10 ? `0${minutes}` : minutes,
            seconds: seconds < 10 ? `0${seconds}` : seconds,
        };
    }

    return (
        <div className="countdown-timer justify-center flex gap-2 items-center">
            <div className='p-2 font-medium text-sm bg-gray-100'>
                <span>{timeLeft.days}</span>
            </div>
            <div className='text-neutral-500'>:</div>
            <div className='p-2 font-medium text-sm bg-gray-100'>
                <span>{timeLeft.hours}</span>
            </div>
            <div className='text-neutral-500'>:</div>
            <div className='p-2 font-medium text-sm bg-gray-100'>
                <span>{timeLeft.minutes}</span>
            </div>
            <div className='text-neutral-500'>:</div>
            <div className='p-2 font-medium text-sm bg-gray-100'>
                <span>{timeLeft.seconds}</span>
            </div>
        </div>
    );
};

export default CountdownTimer;
