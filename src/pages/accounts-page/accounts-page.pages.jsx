import React from "react";
import ProfileForAccountsPage from "../../components/accounts-page-components/profiles-for-accounts-page/profiles-for-accounts.components";
import CreateProfileAccounts from "../../components/accounts-page-components/create-profile-accounts-page/create-profile-accounts-page.components";

import { Link } from "react-router-dom";

import { UUIDContext } from "../../UUIDContext";
import "./accounts-page.styles.scss"

class AccountsPage extends React.Component {

    componentDidMount() {
        this.setState({
            ic_uuid: this.context.userUUID
        })
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            userEmail: '',
            userName: '',
            ic_uuid: this.context.uuid,
            profileCount: 0,
            profileList: []
        }
    }

    render() {
        return (
            <div className="accounts-page">
                <h1 className="accounts-welcome-message">Welcome to InternConnects!</h1>
                <h5 className="account-information-message">
                    You are signed in as:
                </h5>
                <h5 className="account-information-email">
                    , {this.context.userUUID}, {this.state.ic_uuid}
                </h5>

                <Link to="/">
                    <button className="account-page-signout-button">Sign Out</button>
                </Link>

                <div className="accounts-profiles-container">
                    <ProfileForAccountsPage className="already-created-profile"/>
                    <CreateProfileAccounts className="create-new-profile"/>
                </div>


                <h6 className="listing-message">(select profile to view listings)</h6>
            </div>
        )
    }
}

AccountsPage.contextType = UUIDContext;

export default AccountsPage;