import React from "react";

import ButtonMatchList from "../match-list/button-for-match-list/button-for-match-list.components";
import LocationInput from "./location-input-info/location-input-info.components";
import {Link} from "react-router-dom";

import "./header-match-list.styles.scss";

const ConnectionPageHeader = ({userProfileData}) => {

        return (
            <div className="header-panel">

                <div className="connection-header-container">

                    <div className="logo-and-location">
                        <Link to='/' className="logo-name">InternConnects</Link>
                        <LocationInput className="user-location" userLocationData={userProfileData}/>
                    </div>


                    <div className="internship-period">
                        <div className="internship-dates">
                            {userProfileData.arrivalMonth} {userProfileData.arrivalDay}, {userProfileData.arrivalYear}
                        </div>

                        <div className="internship-dates">
                            {userProfileData.departureMonth} {userProfileData.departureDay}, {userProfileData.departureYear} 
                        </div>
                    </div>


                    <div className="header-functionalities-container">

                        {/*<div className="sort-results">*/}
                        {/*    <ButtonMatchList ButtonName={"Sort Results"}/>*/}
                        {/*</div>*/}

                        {/*<div className="user-profile-access">*/}
                        {/*    <ButtonMatchList ButtonName={"My Information"}/>*/}
                        {/*</div>*/}

                    </div>


                    <Link to='/accountsPage' className="img-container">
                        <img className="profile-image" src={`${userProfileData.photoPath}`}
                             alt='intern-connects'/>
                    </Link>

                </div>

            </div>
        )

}

export default ConnectionPageHeader;

