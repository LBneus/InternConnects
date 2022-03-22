import React from "react";
import ProfileForAccountsPage from "../../components/accounts-page-components/profiles-for-accounts-page/profiles-for-accounts.components";
import CreateProfileAccounts from "../../components/accounts-page-components/create-profile-accounts-page/create-profile-accounts-page.components";


import "./accounts-page.styles.scss"

const AccountsPage = () => (

    <div className="accounts-page">
        <h1 className="accounts-welcome-message">Welcome to InternConnects</h1>
        <h5 className="account-information-message">
            You are signed in as:
        </h5>  
        <h5 className="account-information-email">
            alexander.j.erwin@vanderbilt.edu
        </h5> 
        <button className="account-page-signout-button">Sign Out</button>

        <div className="accounts-profiles-container">
            <ProfileForAccountsPage className="already-created-profile"/>
            <CreateProfileAccounts className="create-new-profile"/>
        </div>

        <h6 className="listing-message">(select profile to view listings)</h6>
    </div>
)

export default AccountsPage;