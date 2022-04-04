import React from "react";

import MatchedUserBio from "./bio-matched-user/bio-matched-user";
import MatchedUserFunctions from "./functions-matched-user/functions-matched-user.components";

import "./funcs-and-bio.styles.scss";

const FuncsAndBio = ({FuncsAndBioProps}) => (
    <div className="functions-and-bio-container">
        <MatchedUserFunctions/>
        <MatchedUserBio MatchedUserBioProps={FuncsAndBioProps}/>
    </div>
)

export default FuncsAndBio;