import React from "react";

import "./date-input-info.styles.scss";

const DateInput = ({userDateInfo, userDirection}) => (
    <div className="date-input-container">
        <div class="date-input-container">
    
        { 
            userDirection === "From" ? 
            
                 <div className="date-input">
                        {userDateInfo.arrivalMonth} {userDateInfo.arrivalDay}, {userDateInfo.arrivalYear}
                    </div>
            
            :
            <div className="date-input">  </div>
                
        }
        </div>

    </div>
)

export default DateInput;