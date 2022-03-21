import React from "react";

import ButtonMatchList from "../match-list/button-for-match-list/button-for-match-list.components";

import "./header-match-list.styles.scss";

const ConnectionPageHeader = ({userName}) => (

            <div className="connection-header-container">

                <div className="logo-and-location">
                    <h1 className="logo-name">InternConnects</h1>
                    <h4 className="user-location">San Francisco</h4>
                </div>

                <div className="internship-period">
                    <h4 className="start-date">From: <span>May 12, 2022</span></h4>
                    <h4 className="end-date">To: August 8, 2022</h4>
                </div>

                <div className="sort-results">
                    <ButtonMatchList ButtonName={"Sort Results"}/>
                </div>

                <div className="user-profile-access">
                    <ButtonMatchList ButtonName={"My Information"}/>
                </div>

                <div className="img-container">
                    <img className="profile-image" src={`assets/profile-images/${userName}.jpg`} alt={userName}></img>
                </div>

            </div>

)

export default ConnectionPageHeader;

