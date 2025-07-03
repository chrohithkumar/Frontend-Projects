import React, { useEffect, useState } from 'react'
import './Booking.css'
import { Button } from 'react-bootstrap'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export default function BookingDate() {
    const [dates, setDates] = useState()
    const [currentmonth, setCurrentMonth] = useState(new Date().getMonth())
    const [Currentyear, setCurrentYear] = useState(new Date().getFullYear())
    const [selectedRange, setSelectedRange] = useState([]);
    const [selectedDates, setSelectedDates] = useState([]);


    let navigate = useNavigate()
    const days = ["Mon", "Tue", "Web", "Thu", "Fir", "Sat", "Sun"]

    useEffect(() => {
        generateDates(currentmonth, Currentyear)
    }, [currentmonth, Currentyear])

    const generateDates = (month, year) => {
        let FirstDayoftheMonth = new Date(year, month, 1)
        let LastDayoftheMonth = new Date(year, month + 1, 0)
        let startDay = (FirstDayoftheMonth.getDay() + 6) % 7 // starts from Monday
        let datesArray = []
        for (let i = 0; i < startDay; i++) {
            datesArray.push(null)
        }
        for (let i = 1; i <= LastDayoftheMonth.getDate(); i++) {
            datesArray.push(new Date(Currentyear, currentmonth, i))
        }
        setDates(datesArray)
    }

    const pastdate = (date) => {
        const today = new Date()
        today.setDate(today.getDate() + 1)
        today.setHours(0, 0, 0, 0)
        return date < today
    }


    console.log(dates, 'dates.......................')

    const getMonthName = (date) => (date ? date.toLocaleDateString('en-us', { month: 'short' }) : '') // to get the month name from date obj

    const handlePrev = (month, year) => {
        let prevmonth = month == 0 ? 11 : month - 1;
        setCurrentMonth(prevmonth)
        let prevyear = month == 0 ? year - 1 : year
        setCurrentYear(prevyear)
        setSelectedRange([]);
        setSelectedDates([]);
    }

    const handleNext = (month, year) => {
        let nextmonth = month == 11 ? 0 : month + 1
        setCurrentMonth(nextmonth)
        let nextyear = month == 11 ? year + 1 : year
        setCurrentYear(nextyear)
        setSelectedRange([]);
        setSelectedDates([]);
    }

    const handleMouseDown = (index) => {
        if (!dates[index] || pastdate(dates[index])) return;
        setSelectedRange([index]);
        handleSelectedDatesChange([index]);
    }

    const formatDate = (date) => {
        if (!date) return '';
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
    };

    const handleSelectedDatesChange = (selectedRange) => {
        const selectedDatesArray = selectedRange.map((index) => dates[index]);
        const formattedDates = selectedDatesArray.map((date) => formatDate(date));
        setSelectedDates(formattedDates);
    };

    console.log(selectedDates, 'selecteddates........................');

    const handleBook = () => {
        if (!selectedDates[0]) {
            Swal.fire({
                icon: 'error',
                text: 'Please Choose the Date'
            })
        }
        else {
            Swal.fire({
                title: 'Success!',
                text: `${selectedDates[0]} date has been Selected`,
                icon: 'success',
            })
            navigate('/RoomBookingForm', {
                state: {
                    date: selectedDates[0]
                }
            })

        }

    }

    return (
        <div className='BookingDateContainer'>
            <div className='CalenderContainer'>
                <div className='CalenderContent mt-2'>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <Button className='prev' onClick={() => handlePrev(currentmonth, Currentyear)}>Previous</Button>
                        </div>
                        <div>
                            <h2>{getMonthName(new Date(Currentyear, currentmonth))} {Currentyear}</h2>
                        </div>
                        <div>
                            <Button className='Next' onClick={() => handleNext(currentmonth, Currentyear)}>Next</Button>
                        </div>
                    </div>
                    <div className='dayslist'>
                        {days?.map((day, index) => {
                            return (
                                <div key={index} className='days'>{day}</div>
                            )
                        })}
                    </div>
                    <div className='datelist'>
                        {dates?.map((date, index) => {
                            return (
                                <div key={index} className={`date ${pastdate(date) ? 'pastdate' : ''} ${!date ? 'empty' : ''} ${selectedRange.includes(index) ? 'selected' : ''} `} onMouseDown={() => handleMouseDown(index)} >
                                    {date == null ? '' : date.getDate()}
                                </div>
                            )
                        })}
                    </div>
                    <div className='d-flex justify-content-center mt-5'>
                        <Button className='booknowbtn' onClick={handleBook}>Book Now</Button>
                    </div>

                </div>
            </div>

        </div>
    )
}
