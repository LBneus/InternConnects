import React from "react";

import "./location-input-info.styles.scss";

class LocationInput extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            userLocation: this.props.userLocation
        }
    }

    render() {
        return (
            <div className="location-input-container">
                <input placeholder={this.state.userLocation} className="location-input"/>
            </div>
        )
    }
}

export default LocationInput;