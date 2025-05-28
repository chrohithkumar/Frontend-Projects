import React, { useCallback, useState } from 'react'
import Child from './Child'
export default function UseCallback() {

    const [count,SetCount]=useState(0)
    const [todos,SetTodo]=useState([])

    const handleIncrement=()=>{
        console.log('incrementing..........')
        SetCount((c)=>c+1)
    }

    // const handleAdd=()=>{
    //     console.log("Adding...........  from child")
    //     // SetTodo((t)=>([...t,"New Todo"]))
    // }
    const handleAdd=useCallback(()=>{
        SetTodo((t) => [...t, "New Todo"]); 
    },[])

    return(
        <>
          <div className="container">
          <h1>These is CallbAck</h1>

            <div className="counterdisplay">
                <h1>The Count will be {count}</h1>
            </div>
            <div className="button">
                <button onClick={handleIncrement}>Increment</button>
            </div>
                <div className="TodoContainer">
                    {/* <div className="content">
                        {todos.map((item,index)=>{
                            return (
                                <div>
                                 {item}
                                </div>
                            )        
                            
                        })}
                    </div> */}
                    {/* <div className="Addbtn">
                        <button onClick={handleAdd}>Add Todo</button>
                    </div> */}

                    <Child todos={todos} handleAdd={handleAdd}></Child>
                </div>
          </div>

        </>
    )
       
}

