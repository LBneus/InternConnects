import React from "react";

import "./location-input-info.styles.scss";

const LocationInput = ({userLocationData}) => {
    console.log("HEY");
    console.log(userLocationData);
    return (

        
        <div className="location-input-container">
            {userLocationData.city}, {userLocationData.state}
        </div>
    )
    
}

export default LocationInput;