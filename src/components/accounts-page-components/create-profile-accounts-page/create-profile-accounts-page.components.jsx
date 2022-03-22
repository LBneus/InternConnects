import React from "react";

import "./create-profile-accounts-page.styles.scss";

const CreateProfileAccounts = () => (
    <div className="create-profile-container">
        <div className="create-profile-message">Create Another Profile</div>
        <div className="create-profile-sign-container">
            <img className="create-profile-sign" src={`/assets/icon-images/plus-sign-in-white-circle.png`} alt="plus-sign"></img>
        </div>
    </div>
)

export default CreateProfileAccounts;