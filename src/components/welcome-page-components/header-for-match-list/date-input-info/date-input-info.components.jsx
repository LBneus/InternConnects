import React from "react";

import "./date-input-info.styles.scss";

const DateInput = ({userDateInfo, userDirection}) => (
    <div className="date-input-container">
    
        { 
            userDirection === "From" ? 
            <div class="date-input-container"><span>From</span><span className="date-input">  {userDateInfo.arrivalMonth} {userDateInfo.arrivalDay}, {userDateInfo.arrivalYear} </span></div>
            :
            <div class="date-input-container"><span>To</span><span className="date-input">  {userDateInfo.departureMonth} {userDateInfo.departureDay}, {userDateInfo.departureYear} </span></div>
        }

    </div>
)

export default DateInput;