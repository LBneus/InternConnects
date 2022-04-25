import React from "react";

import "./single-notification.styles.scss";

const SignleNotification = ({RequestUserId}) => {
    return(
        <div className="single-notification-container">
            <div className="notification">
                <div className="request-user-id">{RequestUserId}</div>
                <div className="accept-deny-button">
                    <div className="deny-button"></div>
                    <div className="accept-button"></div>
                </div>
            </div>
        </div>
    )
}

export default SignleNotification;