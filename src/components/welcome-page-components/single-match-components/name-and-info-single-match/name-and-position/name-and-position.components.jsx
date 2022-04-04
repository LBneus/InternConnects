import React from "react";

import "./name-and-position.styles.scss";

const NameAndPosition = ({firstName, lastName, position}) => (
    <div className="name-and-position">
            <div className="matched-user-name-and-position">
                <span className="matched-user-name">{firstName}&nbsp;{lastName}</span>
                &nbsp;-&nbsp; 
                <span>{position}</span>
            </div>
    </div>
)

export default NameAndPosition;