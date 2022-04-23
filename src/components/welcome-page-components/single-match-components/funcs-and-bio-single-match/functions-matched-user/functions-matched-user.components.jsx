import React from "react";

import ButtonMatchList from "../../../match-list/button-for-match-list/button-for-match-list.components";

import "./functions-matched-user.styles.scss";

const MatchedUserFunctions = (props) => (
    <div className="matched-user-functions-container">

        <div className="contact-matched-cover">
            <ButtonMatchList className="contact-matched-user" ButtonName={"Contact"}
                             props={props}
                             sl={props.sl}
                             rl={props.rl}
                             al={props.al}
                             dl={props.dl}
                             id={props.id}/>
        </div>
        
    </div>
)

export default MatchedUserFunctions;

