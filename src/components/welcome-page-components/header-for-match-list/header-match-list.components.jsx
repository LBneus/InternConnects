import React from "react";

import ButtonMatchList from "../match-list/button-for-match-list/button-for-match-list.components";
import LocationInput from "./location-input-info/location-input-info.components";
import DateInput from "./date-input-info/date-input-info.components";

import "./header-match-list.styles.scss";

const ConnectionPageHeader = ({userName}) => (

            <div className="connection-header-container">

                <div className="logo-and-location">
                    <div className="logo-name">InternConnects</div>
                    <LocationInput className="user-location" userLocation={"San Francisco"}/>
                </div>


                <div className="internship-period">
                    <div className="start-date">
                        <DateInput userDirection="From" userDate="May 12, 2022"/>
                    </div>

                    <div className="end-date">
                        <DateInput userDirection="To" userDate={"August 8, 2022"}/>
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


                <div className="img-container">
                    <img className="profile-image" src={`assets/profile-images/${userName}.jpg`} alt={userName}></img>
                </div>



            </div>

)

export default ConnectionPageHeader;

