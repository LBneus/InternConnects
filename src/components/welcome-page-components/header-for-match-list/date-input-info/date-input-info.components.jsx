import React from "react";

import "./date-input-info.styles.scss";

const DateInput = ({userDateInfo, userDirection}) => (
    <div className="date-input-container">
    
        { 
            userDirection === "From" ? 
            <div class="date-input-container">From <div className="date-input">  {userDateInfo.arrivalMonth} {userDateInfo.arrivalDay}, {userDateInfo.arrivalYear} </div></div>
            :
            <div className="date-input"> {userDateInfo.departureDay} </div>
                
        }

    </div>
)

export default DateInput;