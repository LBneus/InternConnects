import React from "react";

import ButtonMatchList from "../../../match-list/button-for-match-list/button-for-match-list.components";

import "./functions-matched-user.styles.scss";

const MatchedUserFunctions = () => (
    <div className="matched-user-functions-container">


        <div className="more-details-cover">
            <ButtonMatchList className="more-details-matched-user" ButtonName={"More Details"}/>
        </div>

        <div className="contact-matched-cover">
            <ButtonMatchList className="contact-matched-user" ButtonName={"Contact"}/>
        </div>
        
    </div>
)

export default MatchedUserFunctions;

