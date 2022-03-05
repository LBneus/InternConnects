import React from "react";

import "./name-and-position.styles.scss";

const MatchedUserNamePosition = ({userName, position}) => (
    <div className="name-and-position">
            <h3 className="match-user-name">{userName}</h3>
            <h3 className="match-user-position"> - {position}</h3>
    </div>
)

export default MatchedUserNamePosition;