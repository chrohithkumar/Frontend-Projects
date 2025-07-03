import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import './RoomList.css'
import Swal from 'sweetalert2';

const roomData=[
        { RoomName: "Sri Venkateswara Nilayam", RoomId: 1, RoomLocation: "Tirumala", RoomCost: 500, RoomType: "Non-AC", Capacity: 2, Availability: "Yes" },
        { RoomName: "Padmavathi Guest House", RoomId: 2, RoomLocation: "Tirumala", RoomCost: 750, RoomType: "AC", Capacity: 3, Availability: "Yes" },
        { RoomName: "Madhavam Guest House", RoomId: 3, RoomLocation: "Tirumala", RoomCost: 600, RoomType: "AC", Capacity: 2, Availability: "No" },
        { RoomName: "Sankar Mutt Cottages", RoomId: 4, RoomLocation: "Tirumala", RoomCost: 400, RoomType: "Non-AC", Capacity: 2, Availability: "Yes" },
        { RoomName: "Varaha Swamy Rest House", RoomId: 5, RoomLocation: "Tirumala", RoomCost: 1000, RoomType: "AC", Capacity: 4, Availability: "No"  },
        { RoomName: "Gowtami Guest House", RoomId: 6, RoomLocation: "Tirumala", RoomCost: 650, RoomType: "AC", Capacity: 3, Availability: "Yes" },
        { RoomName: "Annapurna Nilayam", RoomId: 7, RoomLocation: "Tirumala", RoomCost: 550, RoomType: "Non-AC", Capacity: 2, Availability: "Yes" },
        { RoomName: "Sri Padmavathi Cottage", RoomId: 8, RoomLocation: "Tirumala", RoomCost: 800, RoomType: "AC", Capacity: 4, Availability: "No"  },
        { RoomName: "Rama Bhavanam", RoomId: 9, RoomLocation: "Tirumala", RoomCost: 450, RoomType: "Non-AC", Capacity: 2, Availability: "Yes" },
        { RoomName: "Balaji Guest House", RoomId: 10, RoomLocation: "Tirumala", RoomCost: 700, RoomType: "AC", Capacity: 3, Availability: "Yes" },
        { RoomName: "TTD VIP Guest House", RoomId: 11, RoomLocation: "Tirumala", RoomCost: 1500, RoomType: "AC", Capacity: 5, Availability: "No"  },
        { RoomName: "Narayanagiri Rest House", RoomId: 12, RoomLocation: "Tirumala", RoomCost: 600, RoomType: "AC", Capacity: 3, Availability: "Yes" },
        { RoomName: "Nandakam Guest House", RoomId: 13, RoomLocation: "Tirumala", RoomCost: 850, RoomType: "AC", Capacity: 4, Availability: "Yes" },
        { RoomName: "Vishnu Nivasam", RoomId: 14, RoomLocation: "Tirumala", RoomCost: 300, RoomType: "Non-AC", Capacity: 2, Availability: "Yes" },
        { RoomName: "Seshadri Nilayam", RoomId: 15, RoomLocation: "Tirumala", RoomCost: 400, RoomType: "Non-AC", Capacity: 2, Availability: "No"  },
        { RoomName: "Srinivasam Complex", RoomId: 16, RoomLocation: "Tirumala", RoomCost: 500, RoomType: "Non-AC", Capacity: 3, Availability: "Yes" },
        { RoomName: "TTD Alipiri Guest House", RoomId: 17, RoomLocation: "Tirumala", RoomCost: 750, RoomType: "AC", Capacity: 3, Availability: "No"  },
        { RoomName: "Yatri Sadan", RoomId: 18, RoomLocation: "Tirumala", RoomCost: 600, RoomType: "Non-AC", Capacity: 2, Availability: "Yes" },
        { RoomName: "Annapurna Sadan", RoomId: 19, RoomLocation: "Tirumala", RoomCost: 350, RoomType: "Non-AC", Capacity: 2, Availability: "Yes" },
        { RoomName: "Sri Krishnadevaraya Guest House", RoomId: 20, RoomLocation: "Tirumala", RoomCost: 950, RoomType: "AC", Capacity: 4, Availability: "Yes" }
    ]
export default function RoomList() {
    const [rooms, setRooms] = useState();
    const [filterData, setFilterData] = useState({
        RoomName: '',
        RoomType: '',
        Status: ''
    })
    // const [data,setData]=useState([])

    useEffect(()=>{
        // setData(rooms)
        setRooms(roomData)
    },[])


    const handleselected = (e) => {
        const { name, value } = e.target
        setFilterData((prev) => ({
            ...prev,
            [name]: value
        }))
        // if (name == 'RoomName') {
        //     setFilterData((prev) => ({
        //         ...prev,
        //         RoomName: value
        //     }))
        // }
        // if(name=='RoomType'){
        //     setFilterData((prev)=>({
        //         ...prev,
        //         RoomType:value
        //     }))
        // }
        // if(name=='Status'){
        //     setFilterData((prev)=>({
        //         ...prev,
        //         Status:value
        //     }))
        // }
    }
    const handleSearch = () => {
        if (!filterData.RoomName && !filterData.RoomType && !filterData.Status) {
            Swal.fire({
                icon: 'error',
                title: 'Please Choose AtLeast OneFeild!'
            })
            return
        }
    //    const filteredData = rooms.filter((item) => item.RoomName == filterData.RoomName && item.RoomType == filterData.RoomType &&
    //        item.Availability === (filterData.Status === "Yes" ? true : filterData.Status === "No" ? false : item.Availability))
        const filteredData=roomData.filter((item)=>(
            (!filterData.RoomName || item.RoomName===filterData.RoomName) &&
            (!filterData.RoomType || item.RoomType===filterData.RoomType) &&
            (!filterData.Status || item.Availability===filterData.Status)
        ))
          setRooms(filteredData)
    }



    return (
        <div className='RoomListcontainer'>
            <div className='RoomListFilter'>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='RoomName'>Room Name</label>
                    <select className='form-select' id='RoomName' name='RoomName' onChange={(e) => handleselected(e)}>
                        <option value="">Select Rooms</option>
                        {roomData.map((room, index) => (
                            <option key={index}>{room.RoomName}</option>
                        ))}
                    </select>
                    {/* <input id='RoomName' className='form-control'></input> */}
                </div>
                <div className='mb-3 dropdowninput'>
                    <label className='form-label' htmlFor='RoomType'>Room Type</label>
                    <select className='form-select' id='RoomType' name='RoomType' onChange={(e) => handleselected(e)}>
                        <option value="">Select Room Type</option>
                        <option value="Non-AC">Non-AC</option>
                        <option value="AC">AC</option>
                    </select>
                    {/* <input id='RoomType' className='form-control'></input> */}
                </div>
                <div className='mb-3 dropdowninput'>
                    <label className='form-label' htmlFor='AvailabilityStatus'>Availability Status</label>
                    <select className='form-select' id='AvailabilityStatus' name='Status' onChange={(e) => handleselected(e)}>
                        <option value="">Select Status</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    {/* <input id='AvailabilityStatus' className='form-control'></input> */}
                </div>
                <div className='SearchbuttonContainer'>
                    <Button onClick={handleSearch}>Search</Button>
                </div>

            </div>
            <div className='tablecontent'>
                <table className='table-bordered'>
                    <thead>
                        <tr>
                            <th>Room Name</th>
                            <th>Room Type</th>
                            <th>Room Cost</th>
                            <th>Capacity</th>
                            <th>Avalibility Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms?.map((room, index) => (
                            <tr key={room.RoomId} style={{ backgroundColor: index % 2 == 0 ? "#f9f9f9" : "#e0e0e0" }}>
                                <td>{room.RoomName}</td>
                                <td>{room.RoomType}</td>
                                <td >{room.RoomCost}</td>
                                <td>{room.Capacity}</td>
                                <td>{room.Availability}</td>
                            </tr>
                        ))}

                    </tbody>

                </table>
            </div>
        </div>
    )
}
