import React from "react";

import "./name-and-position.styles.scss";

const NameAndPosition = ({userName, position}) => (
    <div className="name-and-position">
            <div className="match-user-name">{userName} -</div>
            <div className="match-user-position">- {position}</div>
    </div>
)

export default NameAndPosition;