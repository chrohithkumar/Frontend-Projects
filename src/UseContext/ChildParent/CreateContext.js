import React, { createContext, useState } from 'react'

export const MessageContext=createContext();

 const CreateContextS=({children })=> {
    const [message,setMessage]=useState('Hi these is Parent')
  return (
    
        <MessageContext.Provider value={setMessage}>
            <p>These is Parent:{message}</p>
            {children }
        </MessageContext.Provider>
  )
}

export default CreateContextS