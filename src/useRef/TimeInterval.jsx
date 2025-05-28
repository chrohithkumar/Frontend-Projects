import React, { useState, useRef, useEffect } from 'react'

export default function TimeInterval() {
    const [time, setTime] = useState(0);
    const [prevtime,setPrevTime]=useState(0);

    const pastTime = useRef();

    
    const handlestart=()=>{
        pastTime.current=setInterval(()=>{
            setPrevTime(time)
            setTime(prevtime => prevtime + 1);

        },1000)

        return ()=>clearInterval(pastTime.current)
    }
    const handlestop = () => {
        //clearInterval is the javascript method 
        //clearInterval is use to stop the Timer by SetInterval
        clearInterval(pastTime.current)
    }

    return (
        <div>
            <h1>Current Time:{time}</h1>
            <h2>Past Time:{prevtime}</h2>
            <button onClick={handlestop}>Stop Timer</button>
            <button onClick={handlestart}>Start Timer</button>
        </div>
    )
}
