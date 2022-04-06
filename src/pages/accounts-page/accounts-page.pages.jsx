import React from "react";
import ProfileForAccountsPage from "../../components/accounts-page-components/profiles-for-accounts-page/profiles-for-accounts.components";

import {Link, Redirect} from "react-router-dom";

import { UUIDContext } from "../../UUIDContext";
import "./accounts-page.styles.scss"
import CreateProfileForm
    from "../../components/accounts-page-components/create-profile-accounts-page/form-create-profile/form-create-profile.components";
import "./create-profile-accounts-page.styles.scss";

class AccountsPage extends React.Component {

    componentDidMount() {
        this.setState({
            ic_uuid: this.context.userUUID
        })
        let uuid = this.context.userUUID;
        if (uuid !== '') {
            this.fetchPageInfo()
        }
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            firstName: '',
            ic_uuid: this.context.userUUID,
            profileCount: 0,
            profileList: [],
            createProfileModal: false
        }
        this.signOutOfAccount = this.signOutOfAccount.bind(this);
        this.fetchPageInfo = this.fetchPageInfo.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    fetchPageInfo() {
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

    signOutOfAccount() {
        this.context.setUserUUID({userUUID: ''})
    }

    openModal() {
        this.setState({
            createProfileModal: true
        })
    }

    closeModal() {
        this.setState({
            createProfileModal: false
        })
        this.fetchPageInfo();
    }

    render() {
        let uuid = this.context.userUUID;
        if (uuid.toString() === '') {
            return (
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
                        <div className="create-new-profile">
                            <div className="create-profile-container">
                                <div className="create-profile-message">Create Another Profile</div>
                                <div className="create-profile-sign-container">
                                    <img className="create-profile-sign" src={`/assets/icon-images/plus.png`}
                                         alt="plus-sign"
                                         onClick={this.openModal}/>
                                </div>
                                {(this.state.createProfileModal === true) &&
                                    <div className="create-profile-pop-up-container">
                                        <div className="create-profile-pop-up-content">
                                            <button className="close-popup-btn" onClick={this.closeModal}>close</button>
                                            <CreateProfileForm/>
                                        </div>
                                    </div>}
                            </div>
                        </div>}
                </div>

                <h6 className="listing-message">(select profile to view listings)</h6>
            </div>
        )
    }
}

AccountsPage.contextType = UUIDContext;

export default AccountsPage;