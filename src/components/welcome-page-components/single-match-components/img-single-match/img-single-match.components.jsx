import React from "react";

import "./img-single-match.styles.scss";

const MatchedUserImage = ({MatchedUserImageProps}) => {
    return(
        <div className="img-container">
            <img className="student-image" src={`${MatchedUserImageProps.photoPath}`} alt={MatchedUserImageProps.photoPath}/>
        </div>
    )
}

export default MatchedUserImage;