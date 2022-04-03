import React from "react";

import "./pop-up.styles.scss";

const PopUp = (props) => {

    return (props.trigger) ? (
        <div className="create-profile-pop-up-container">
            <div className="create-profile-pop-up-content">
            <button className="close-popup-btn" onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
            </div>
        </div>
    ) : "";     
}

export default PopUp; 