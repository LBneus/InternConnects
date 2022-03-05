import React from "react";

import "./img-single-match.styles.scss";

const MatchedUserImage = ({userName}) => (
    <div className="img-container">
        <img className="student-image" src={`assets/user-images/${userName}.jpg`} alt={userName}></img>
    </div>
)

export default MatchedUserImage;