import React, { useContext } from 'react'
import { MessageContext } from './CreateContext';

export default function UseContent() {
    const setMessage=useContext(MessageContext);
    //console.log(setMessage);
    
    
  return (
    <div>
        <button onClick={() => setMessage('Updated by Child')}>Update</button>
    </div>
  )
}
