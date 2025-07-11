import React, { useEffect, useState } from 'react';
import './BookRooms.css'
import { useLocation } from 'react-router-dom'

export default function BookRooms() {
  const [roomdetails, SetRoomdetails] = useState()
  const [selectedrooms, SetSelectedRooms] = useState([])
  const location = useLocation()

  useEffect(() => {
    if (location?.state) {
      SetRoomdetails(location?.state.roomdetails)
    }
  }, [location?.state])


  const handleSelect=(index)=>{

    SetSelectedRooms((prev)=>[...prev,index])
  }

  console.log(selectedrooms,'selectedrooms..!')

  return (
    <div className='BookRoomContainer'>
      <div className='BookRoomContent'>
        <div className='d-flex justify-content-center mt-4'><h3 className='heading'>{roomdetails?.RoomName}</h3></div>
        <div className='BoookRoom mt-4'>
          {Array(180).fill().map((_, index) => (
            <input key={index} type='checkbox' className='checkbox' onClick={()=>handleSelect(index)} style={selectedrooms.includes(index)?{ backgroundColor: 'red' } : {}} />
          ))}
        </div>
      </div>
    </div>
  )
}
