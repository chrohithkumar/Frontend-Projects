import React, { useEffect, useRef, useState } from "react";

export default function Countbyuseref() {
    const [count,setCount]=useState(0)

    const prevcount =useRef();
    // prevcount.current=count
  
    useEffect(()=>{
      prevcount.current=count
    })
    const handleClick=()=>{
      setCount(count+1)
    }
    return (
      <div className="App">
          <h1>Current Value:{count}</h1>
          <h2>Previous Value:{prevcount.current}</h2>
          <button onClick={handleClick}>Increment</button>
      </div>
    );
}
