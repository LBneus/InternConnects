import React from "react";

import "./location-input-info.styles.scss";

const LocationInput = ({userLocationData}) => {

    return (
        <div className="location-input-container">
            {userLocationData.city}, {userLocationData.state}
        </div>
    )
    
}

export default LocationInput;