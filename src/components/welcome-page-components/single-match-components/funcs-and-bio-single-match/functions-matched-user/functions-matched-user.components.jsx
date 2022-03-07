import React from "react";

import {ReactComponent as StarMatchedUser} from "../../../../../icons/star-matched-user.svg";
import "./functions-matched-user.styles.scss";

const MatchedUserFunctions = () => (
    <div className="matched-user-functions-container">
        <div className="matched-user-star-icon">
            <StarMatchedUser className="star-icon-for-matched-user"/>
        </div>
        <div className="more-details-matched-user">More Details</div>
        <div className="contact-matched-user">Contact Steve</div>
    </div>
)

export default MatchedUserFunctions;

