import React from "react";

import MatchedUserBio from "./bio-matched-user/bio-matched-user";
import MatchedUserFunctions from "./functions-matched-user/functions-matched-user.components";

import "./funcs-and-bio.styles.scss";

const FuncsAndBio = () => (
    <div className="functions-and-bio-container">
        <MatchedUserFunctions/>
        <MatchedUserBio/>
    </div>
)

export default FuncsAndBio;