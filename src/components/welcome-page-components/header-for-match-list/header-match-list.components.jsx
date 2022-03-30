import React from "react";

import ButtonMatchList from "../match-list/button-for-match-list/button-for-match-list.components";
import LocationInput from "./location-input-info/location-input-info.components";
import DateInput from "./date-input-info/date-input-info.components";
import {Link} from "react-router-dom";

import "./header-match-list.styles.scss";

class ConnectionPageHeader extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            userProfile: this.props.myProfile,
        }
    }

    render() {
        return (
            <div className="header-panel">

                <div className="connection-header-container">

                    <div className="logo-and-location">
                        <Link to='/' className="logo-name">InternConnects</Link>
                        <LocationInput className="user-location" userLocation={'Seattle, WA'}/>
                    </div>


                    <div className="internship-period">
                        <div className="start-date">
                            <DateInput userDirection="From" userDate="May 12, 2022" className="start-date"/>
                        </div>

                        <div className="end-date">
                            <DateInput userDirection="To" userDate={"August 8, 2022"} className="end-date"/>
                        </div>
                    </div>


                    <div className="header-functionalities-container">

                        <div className="sort-results">
                            <ButtonMatchList ButtonName={"Sort Results"}/>
                        </div>

                        <div className="user-profile-access">
                            <ButtonMatchList ButtonName={"My Information"}/>
                        </div>

                    </div>


                    <Link to='/accountsPage' className="img-container">
                        <img className="profile-image" src={`assets/profile-images/alex-erwin.jpg`}
                             alt='alex-erwin'/>
                    </Link>

                </div>

            </div>
        )
    }
}

export default ConnectionPageHeader;

