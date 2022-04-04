import React from "react";

import "./bio-matched-user.scss";

const MatchedUserBio = ({MatchedUserBioProps}) => (
    <div className="mathched-user-bio-container">
        <div className="bio-header">Bio</div>
        <div className="matched-user-full-bio">
            {MatchedUserBioProps.userBio}
        </div>
    </div>
)

export default MatchedUserBio;