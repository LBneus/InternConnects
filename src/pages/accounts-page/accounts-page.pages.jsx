import React from "react";
import ProfileForAccountsPage from "../../components/accounts-page-components/profiles-for-accounts-page/profiles-for-accounts.components";
import CreateProfileAccounts from "../../components/accounts-page-components/create-profile-accounts-page/create-profile-accounts-page.components";

import {Link, Redirect} from "react-router-dom";

import { UUIDContext } from "../../UUIDContext";
import "./accounts-page.styles.scss"

class AccountsPage extends React.Component {

    componentDidMount() {
        this.setState({
            ic_uuid: this.context.userUUID
        })
        let uuid = this.context.userUUID;
        if (uuid !== '') {
            fetch("https://016oltoux6.execute-api.us-east-1.amazonaws.com/beta/homepage", {
                "method": "GET",
                "headers": {IC_UUID: this.context.userUUID}
            })
                .then(response => response.json())
                .then(response => {
                    if (response.success) {
                        this.setState({
                            firstName: response.userName,
                            profileCount: response.numUPIDs,
                            profileList: response.associatedProfileList,
                        })
                    }
                })
        }
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            firstName: '',
            ic_uuid: this.context.uuid,
            profileCount: 0,
            profileList: []
        }
        this.signOutOfAccount = this.signOutOfAccount.bind(this);
    }

    signOutOfAccount() {
        this.context.setUserUUID({userUUID: ''})
    }

    render() {
        let uuid = this.context.userUUID;
        if (uuid.toString() === '') {
            return(
                <Redirect to={"/"}/>
            )
        }

        return (
            <div className="accounts-page">
                <h1 className="accounts-welcome-message">Welcome to InternConnects!</h1>
                <h5 className="account-information-message">
                    You are signed in as:
                </h5>
                <h5 className="account-information-email">
                    {this.state.firstName}
                </h5>

                <Link to="/">
                    <button className="account-page-signout-button" onClick={this.signOutOfAccount}>Sign Out</button>
                </Link>

                <div className="accounts-profiles-container">
                    {(this.state.profileCount > 0) &&
                        <ProfileForAccountsPage profile={this.state.profileList[0]}
                                                className="already-created-profile"/>}
                    {(this.state.profileCount > 1) &&
                        <ProfileForAccountsPage profile={this.state.profileList[1]}
                                                className="already-created-profile"/>}
                    {(this.state.profileCount > 2) &&
                        <ProfileForAccountsPage profile={this.state.profileList[2]}
                                                className="already-created-profile"/>}
                    {(this.state.profileCount < 3) &&
                        <CreateProfileAccounts className="create-new-profile"/>}
                </div>

                <h6 className="listing-message">(select profile to view listings)</h6>
            </div>
        )
    }
}

AccountsPage.contextType = UUIDContext;

export default AccountsPage;