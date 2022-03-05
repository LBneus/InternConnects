import React from "react";

import "./single-match.styles.scss";

const SingleMatch = ({userName, position})=> (
    <div className="single-match-container">
    
        <div className="img-container">
            <img className="student-image" src={`assets/user-images/${userName}.jpg`} alt={userName}></img>
        </div>

        <div className="name-and-quick-information">
            <div className="name-and-position">
                <h3 className="match-user-name">{userName}</h3>
                <h3 className="match-user-position"> - {position}</h3>
            </div>
        </div>

        <div className="functionalities-and-bio">
        
        </div>
    </div>
)

export default SingleMatch;