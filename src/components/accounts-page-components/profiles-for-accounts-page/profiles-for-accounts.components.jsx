import React from "react";

import { Link } from "react-router-dom";

import "./profiles-for-accounts.styles.scss";

const ProfileForAccountsPage = () => (
    <Link to="/connectionPage" className="profile-container">
        <div className="user-location">San Francisco, CA</div>
        <div className="start-date">May 12, 2022 </div>
        <div className="date-to">to</div>
        <div className="end-date">August 8, 2022</div>
    </Link>

)

export default ProfileForAccountsPage;