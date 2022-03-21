import React from "react";

import "./location-input-info.styles.scss";

const LocationInput = ({userLocation}) => (
    <div className="location-input-container">
        <input placeholder={userLocation} className="location-input"></input>
    </div>
)

export default LocationInput;