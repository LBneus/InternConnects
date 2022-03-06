import React from "react";

import MatchedUserImage from "../single-match-components/img-single-match/img-single-match.components";
import NameAndInfo from "../single-match-components/name-and-info-single-match/name-and-info.components";
import FuncsAndBio from "../single-match-components/funcs-and-bio-single-match/funcs-and-bio.components";

import "./single-match.styles.scss";

const SingleMatch = ({userName, position})=> (

    <div className="single-match-container">

        <MatchedUserImage userName={userName}/>
        <NameAndInfo className="name-and-quick-information" userName={userName} position={position}/>
        <FuncsAndBio className="functionalities-and-bio"/>
        
    </div>
)

export default SingleMatch;