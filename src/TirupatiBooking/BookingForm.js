import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingForm.css'
import Swal from 'sweetalert2';

export default function BookingForm() {
    const [data, setData] = useState({
        Name: '',
        Email: '',
        mobileNumber: '',
        NoofDevotes: '',
        BookingFrom: '',
        BookingTo: ''
    })

    // const [errors, setErrors] = useState({})
    let navigate = useNavigate()
    let location = useLocation();
    useEffect(() => {
        if (location?.state) {
            setData((prev) => ({
                ...prev,
                BookingFrom: location?.state.date
            }))
        }
    }, [location.state])


    // console.log(data, 'Data.................')

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === 'Name') {
            const regex = /^[A-Za-z ]*$/
            if (regex.test(value)) {
                setData((prev) => ({
                    ...prev,
                    Name: value
                }))
            }
            return
        }
        if (name === 'mobileNumber' || name === 'NoofDevotes') {
            const regex = /^\d*$/;
            if (regex.test(value)) {
                setData((prev) => ({
                    ...prev,
                    [name]: value

                }))
            }
            return
        }
        setData((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const handleDateChange = (date) => {
        setData((prev) => ({
            ...prev,
            BookingTo: date
        }))
    }

    // const validateInput = () => {
    //     const { Name, Email, mobileNumber, NoofDevotes } = data
    //     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //     const phoneRegex = /^[6-9]\d{9}$/;
    //     let newErrors = {}
    //     if (!().test(Name)) {
    //         newErrors.Name = 'Alphabets Only'
    //     }
    //     if (!emailRegex.test(Email)) {
    //         newErrors.Email = 'Invaild Mail..'
    //     }
    //     if (!phoneRegex.test(mobileNumber)) {
    //         newErrors.mobileNumber = 'Enter the 10 digit Mobile Number'
    //     }
    //     if (!(/^\d+$/).test(NoofDevotes) || Number(NoofDevotes) <= 0) {
    //         newErrors.NoofDevotes = 'Always be a Postive Number'
    //     }
    //     setErrors(newErrors)
    //     return Object.keys(newErrors).length === 0

    // }
    const handleSubmit = () => {
        if (!data.Name || !data.Email || !data.mobileNumber || !data.NoofDevotes || !data.BookingTo) {
            Swal.fire({
                icon: 'error',
                text: 'Please Fill All Details Before Submitting...'
            })
            return
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phoneRegex = /^[6-9]\d{9}$/;

        if (!emailRegex.test(data.Email) || !phoneRegex.test(data.mobileNumber)) {
            Swal.fire({
                icon: 'error',
                text: 'Enter an Vaild Email Id or MobileNumber'
            })
            return
        }

        console.log(data, '......................')
        const d = {
            name: data.Name,
            mobileNumber: data.mobileNumber,
            Email: data.Email,
            NoofDevotes: data.NoofDevotes,
            BookingForm: data.BookingFrom,
            BookingTo: new Date(data.BookingTo).toISOString()
        }
        Swal.fire({
            icon: 'success',
            title: 'Data Submitted..!',
            text: 'Data Submitted Sucessfully..!'
        })
        navigate('/RoomsList', {
            state: {
                data: d
            }
        })
        setData({
            Name: '',
            Email: '',
            mobileNumber: '',
            NoofDevotes: '',
            BookingTo: ''
        })

        // if (validateInput()) {
        //     console.log(data, '......................')
        //     Swal.fire({
        //         icon: 'success',
        //         title: 'Data Submitted..!',
        //         text: 'Data Submitted Sucessfully..!'
        //     })
        //     setData({
        //         Name: '',
        //         Email: '',
        //         mobileNumber: '',
        //         NoofDevotes: '',
        //         BookingTo: ''
        //     })
        //     setErrors({})
        // }

    }
    return (
        <div className='BookingFormContainer'>
            <div className='form-container'>
                <div className='d-flex justify-content-center'>
                    <h2>Booking Form</h2>
                </div>
                <div className='d-flex gap-2'>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>Name</label>
                        <input type='text' id='Name' name='Name' className='form-control' placeholder='Enter Name' value={data.Name} onChange={(e) => handleChange(e)}></input>
                        {/* {errors.Name && <p style={{ color: 'red' }}>{errors.Name}</p>} */}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Email' className='form-label'>Email</label>
                        <input type='text' id='Email' name='Email' className='form-control' placeholder='Email' value={data.Email} onChange={(e) => handleChange(e)}></input>
                        {/* {errors.Email && <p style={{ color: 'red' }}>{errors.Email}</p>} */}
                    </div>
                </div>
                <div className='d-flex gap-2'>
                    <div className='mb-3'>
                        <label htmlFor='MobileNumber' className='form-label'>MobileNumber</label>
                        <input type='text' id='MobileNumber' name='mobileNumber' className='form-control' placeholder='Enter MobileNumber' value={data.mobileNumber} onChange={(e) => handleChange(e)}></input>
                        {/* {errors.mobileNumber && <p style={{ color: 'red' }}>{errors.mobileNumber};</p>} */}
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='NoofDevotes' className='form-label'>Number of Devotes</label>
                        <input type='text' id='NoofDevotes' name='NoofDevotes' className='form-control' placeholder='Enter NoofDevotes' value={data.NoofDevotes} onChange={(e) => handleChange(e)}></input>
                        {/* {errors.NoofDevotes && <p style={{ color: 'red' }}>{errors.NoofDevotes}</p>} */}
                    </div>
                </div>
                <div className='d-flex gap-2'>
                    <div className='mb-3'>
                        <label htmlFor='bookingfrom' className='form-label'>Booking From</label>
                        <input type='text' id='bookingfrom' name='bookingfrom' className='form-control' value={(data.BookingFrom)?.split('T')[0]} onChange={(e) => handleChange(e)} disabled></input>
                    </div>
                    <div className='mb-2 d-flex flex-column'>
                        <label htmlFor='bookingto' className='form-label'>Booking To</label>
                        <DatePicker
                            className='form-control'
                            selected={data?.BookingTo}
                            //minDate={date>data.BookingFrom}
                            //minDate={data.BookingFrom ? new Date(data.BookingFrom) : null}
                            minDate={data.BookingFrom
                                     ? new Date(new Date(data.BookingFrom).setDate(new Date(data.BookingFrom).getDate() + 1))
                                    : null
                            }
                            dateFormat="YYYY-MM-dd"
                            placeholderText='Choose the Date...'
                            onChange={(date) => handleDateChange(date)}
                        />
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <Button onClick={handleSubmit}>Submit</Button>
                </div>

                {/* <div className='mb-3 form-check'>
                    <input type='checkbox' id='Roomreq' className='form-check-input'></input>
                    <label htmlFor='Roomreq' className='form-label'>Room Required</label>
                </div> */}



            </div>
        </div>
    )
}
