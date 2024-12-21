import React, {useState, useEffect} from 'react';

function MyClock(){

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        let intervalId = setInterval(()=>{
            setTime(new Date());
        }, 1000)

        return()=>{
            clearInterval(intervalId);
        };
    }, []);

    function formatTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        const amPM = hours < 12 ? "AM" : "PM";
        
        hours = hours % 12 || 12;

        return `${preZero(hours)}:${preZero(minutes)}:${preZero(seconds)} ${amPM}`;
    }

    function preZero(timeUnit){
        return `${timeUnit < 10 ? "0" : ""}${timeUnit}`;
    }

    return(
    <div className='clock-outer-container'>
        <div className='clock-container'>
            <span>{formatTime()}</span>
        </div>
    </div>);
}

export default MyClock;