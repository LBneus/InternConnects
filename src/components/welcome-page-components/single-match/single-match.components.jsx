import React from "react";

import MatchedUserImage from "../single-match-components/img-single-match/img-single-match.components";
import NameAndInfo from "../single-match-components/name-and-info-single-match/name-and-info.components";
import FuncsAndBio from "../single-match-components/funcs-and-bio-single-match/funcs-and-bio.components";

import "./single-match.styles.scss";

const SingleMatch = (props)=> {

    return(
        <div className="single-match-container">
            <MatchedUserImage MatchedUserImageProps={props}/>
            <NameAndInfo className="name-and-quick-information" NameAndInfoProps={props}/>
            <FuncsAndBio className="functionalities-and-bio" FuncsAndBioProps={props} sl={props.sl} rl={props.rl} al={props.al} dl={props.dl} id={props.id}/>
        </div>
    )
}

export default SingleMatch;