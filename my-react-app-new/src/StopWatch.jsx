import React, {useState, useRef, useEffect} from 'react';

function Stopwatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [ elapsedTime, setElapsedTime] = useState(0);
    let startTimeRef = useRef(0);
    let interTimeidRef = useRef(null);

    useEffect(()=>{
        if(isRunning){
            interTimeidRef.current = setInterval(()=>{
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return ()=>{
            clearInterval(interTimeidRef.current);
        };

    }, [isRunning]);

    function startWatch(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stopWatch(){
        setIsRunning(false);
    }

    function resetWatch(){
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime(){
        let minutes = Math.floor(elapsedTime /(1000 * 60 )% 60);
        let seconds = Math.floor(elapsedTime /(1000)% 60);
        let milliseconds = Math.floor((elapsedTime % 1000)/ 10);
        return(`${befZero(minutes)}:${befZero(seconds)}:${befZero(milliseconds)}`);
    }

    function befZero(unit){
            return `${unit < 10 ? "0" : ""}${unit}`;
    }

    return(
        <div className='stopwatch-container'>
            <div className='stopwatch'>
                <div className='display-stopwatch'>{formatTime()}</div>
                <div className='stopwatch-control-btns'>
                    <div><button className='start-watch' onClick={startWatch}>Start</button></div>
                    <div><button className='stop-watch' onClick={stopWatch}>Stop</button></div>
                    <div><button className='reset-watch' onClick={resetWatch}>Reset</button></div>
                </div>
            </div>
        </div>
    );
}

export default Stopwatch;