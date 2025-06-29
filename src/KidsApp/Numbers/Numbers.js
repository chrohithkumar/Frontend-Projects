import React from 'react'
import '../global.css'

const data=Array.from({length:100},(_,i)=>{
    const Number=i+1
    return{
        number:Number,
        audio:`/audio/Number/Male/${Number}.mp3`
    }
})
// console.log(data,'data')



const handlePlay=(src)=>{
   const audio= new Audio(src)
    audio.play()
}

export default function Numbers() {
  return (
    <div>
        <div className='Container'>
            <h1 className='d-flex justify-content-center'>NUMBERS 1-100</h1>
            <div className='Content'>
                {data.map((item,index)=>{
                    return(
                        <div key={index}>
                            <button className='btn1' onClick={()=>handlePlay(item.audio)}>{item.number}</button>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
