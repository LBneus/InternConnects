import React from "react";

import "./match-list-single-match.styles.scss";

const SingleMatch = ({userName}) => (
    <div className="single-match-container">
        <div className="img-container">
            <img className="student-image" src={`../../assets/user-images/${userName}.jpg`} alt={userName}></img>
        </div>
        <div></div>
        <div></div>
    </div>
)

export default SingleMatch;