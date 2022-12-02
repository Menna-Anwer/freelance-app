import React, { useState } from 'react'
import "./date.css"



const GetDate = () => {
  const dateTime = new Date();
  const [startDate, setStartDate] = useState(dateTime);
  const [endDate, setEndDate] = useState(dateTime);
  return (
    <div className='date-container'>
       <span className='h4'>من</span>
       <input className='date-input ' type="date" selected={startDate} onChange={(date) => setStartDate(date)} id="date" name="date"/>
       <span className='h4'>الي</span>
       <input className='date-input' type="date" selected={endDate} onChange={(date) => setEndDate(date)} id="date" name="date"/>
    </div>
  )
}

export default GetDate
