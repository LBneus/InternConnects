import React from "react";

import "./header-match-list.styles.scss";

const ConnectionPageHeader = () => (

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
                    <h4>Sort Results</h4>
                </div>

                <div className="user-profile-access">
                    <h4>My Information</h4>
                </div>

            </div>

)

export default ConnectionPageHeader;

