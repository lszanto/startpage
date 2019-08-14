import React from 'react';
import useDateDisplay from '../../hooks/DateDisplay.hook';
import './DateTimeDisplay.css';

function DateTimeDisplay() {
    const currentDate = useDateDisplay(new Date());

    return (
        <div className="DateTimeDisplay" >
            {currentDate}
        </div>
    );
}

export default DateTimeDisplay;
