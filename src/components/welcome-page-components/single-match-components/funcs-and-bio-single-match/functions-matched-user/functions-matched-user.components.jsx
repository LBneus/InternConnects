import React from "react";

import ButtonMatchList from "../../../match-list/button-for-match-list/button-for-match-list.components";

import "./functions-matched-user.styles.scss";

const MatchedUserFunctions = () => (
    <div className="matched-user-functions-container">

        <div className="contact-matched-cover">
            <ButtonMatchList className="contact-matched-user" ButtonName={"Contact"}/>
        </div>
        
    </div>
)

export default MatchedUserFunctions;

