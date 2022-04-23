import React from "react";

import MatchedUserBio from "./bio-matched-user/bio-matched-user";
import MatchedUserFunctions from "./functions-matched-user/functions-matched-user.components";

import "./funcs-and-bio.styles.scss";

const FuncsAndBio = ({FuncsAndBioProps}) => (
    <div className="functions-and-bio-container">
        <MatchedUserFunctions MatchedUserFunctions={FuncsAndBioProps}
                              id={FuncsAndBioProps.id}
                              sl={FuncsAndBioProps.sl}
                              rl={FuncsAndBioProps.rl}
                              al={FuncsAndBioProps.al}
                              dl={FuncsAndBioProps.dl}/>
        <MatchedUserBio MatchedUserBioProps={FuncsAndBioProps}/>
    </div>
)

export default FuncsAndBio;