import React from "react";

import "./img-single-match.styles.scss";

const MatchedUserImage = ({MatchedUserImageProps}) => {
    console.log("HelloGoodPeople");
    console.log(MatchedUserImageProps);
    return(
        <div className="img-container">
            <img className="student-image" src={`${MatchedUserImageProps.photoPath}`} alt={MatchedUserImageProps.photoPath}></img>
        </div>
    )
}

export default MatchedUserImage;