import React from "react";

import "./date-input-info.styles.scss";

const DateInput = ({userDate, userDirection}) => (
    <div className="date-input-container">
        {userDirection} <input type="text" placeholder={userDate} className="date-input"/>
    </div>
)

export default DateInput;