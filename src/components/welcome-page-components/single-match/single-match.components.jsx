import React from "react";

import MatchedUserImage from "../single-match-components/img-single-match/img-single-match.components";
import NameAndInfo from "../single-match-components/name-and-info-single-match/name-and-info.components";
import FuncsAndBio from "../single-match-components/funcs-and-bio-single-match/funcs-and-bio.components";

import "./single-match.styles.scss";

const SingleMatch = (props)=> {

    return(
        <div className="single-match-container">

            <MatchedUserImage userName={props.firstName}/>
            <NameAndInfo className="name-and-quick-information" NameAndInfoProps={props}/>
            <FuncsAndBio className="functionalities-and-bio" FuncsAndBioProps={props}/>
            
        </div>
    )
}

export default SingleMatch;