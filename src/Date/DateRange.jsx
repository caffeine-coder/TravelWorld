import './daterange.css';
import React, { useState } from "react"
import { DateObject } from "react-multi-date-picker"
import DatePicker from "react-multi-date-picker"
import "./teal.css"

function DateRange() { 
  const [values, setValues] = useState([
    new DateObject().subtract(4, "days"),
    new DateObject().add(4, "days")
  ])
  console.log(values)
  return (
    <div className="daterange">
      <DatePicker
  value={values}
  onChange={setValues}
  range
  className='teal'
/>
    </div>
  );
}

export default DateRange;
