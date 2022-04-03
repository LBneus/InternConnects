import React from "react";
import { useState } from "react";

import PopUp from "../../pop-up/pop-up.components";
import CreateProfileForm from "./form-create-profile/form-create-profile.components";

import "./create-profile-accounts-page.styles.scss";

function CreateProfileAccounts() {

    const [buttonPopup, setButtonPopup] = useState(false);

    
    return (<div className="create-profile-container">
        <div className="create-profile-message">Create Another Profile</div>
        <div className="create-profile-sign-container" role="button" onClick={() => setButtonPopup(true)}>
            <img className="create-profile-sign" src={`/assets/icon-images/plus.png`} alt="plus-sign"></img>
        </div>
        <PopUp trigger = {buttonPopup} setTrigger = {setButtonPopup}>
            <CreateProfileForm/>
        </PopUp>
    </div>
    )
}

export default CreateProfileAccounts;