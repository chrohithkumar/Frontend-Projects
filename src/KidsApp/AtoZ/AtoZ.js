import React from 'react'
import '../global.css'
export default function AtoZ() {
    const data = Array.from({ length: 26 }, (_, i) => {
        const letter = String.fromCharCode(65 + i)
        return ({
            letter,
            audio: `/audio/AtoZ/Male/${letter}.mp3`,
        });
    })

    const handlePlay=(src)=>{
        const audio= new Audio(src)
        audio.play()
    }

    return (
        <div className='Container'>
            <h1 className='d-flex justify-content-center'>ALPHABETS</h1>
            <div className='Content'>
                {data.map((item, index) => {
                    return (
                        <div key={index}>
                            <button className='btn1' onClick={()=>handlePlay(item.audio)}>{item.letter}</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
