import React from "react";

import {ReactComponent as StarMatchedUser} from "../../../../../icons/star-matched-user.svg";
import ButtonMatchList from "../../../match-list/button-for-match-list/button-for-match-list.components";

import "./functions-matched-user.styles.scss";

const MatchedUserFunctions = () => (
    <div className="matched-user-functions-container">

        <div className="matched-user-star-icon">
            <StarMatchedUser className="star-icon-for-matched-user"/>
        </div>

        <div className="more-details-cover">
            <ButtonMatchList className="more-details-matched-user" ButtonName={"More Details"}/>
        </div>

        <div className="contact-matched-cover">
            <ButtonMatchList className="contact-matched-user" ButtonName={"Contact"}/>
        </div>
        
    </div>
)

export default MatchedUserFunctions;

