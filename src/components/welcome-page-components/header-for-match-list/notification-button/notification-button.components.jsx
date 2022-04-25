import React from 'react';

import SignleNotification from '../single-notification/single-notification.components';

import "./notification-button.styles.scss";

const NotificationButton = ({notificationsReceivedData}) => {

    var requestNum = 0;
    notificationsReceivedData.forEach(element => {
        requestNum = requestNum + 1;
    });

    // console.log("number of requests: " + requestNum);

    return(
        <div className='notification-button-container'>
            <div class="notification-button">
                <span>Inbox</span>
                <span class="notification-number">{requestNum}</span>
                <div className='all-notifications-container'>
                {notificationsReceivedData
                    .map((RequestUserId) => (
                    <SignleNotification key={RequestUserId} RequestUserId={RequestUserId}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NotificationButton;