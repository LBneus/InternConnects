import React from "react";

import "./welcome-page.styles.scss"

import { UUIDContext } from "../../UUIDContext";
import {Link} from "react-router-dom";

class WelcomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            newAccount: false,

            userUUID: '',
            response: ''
        }
        this.toggleAccountCreate = this.toggleAccountCreate.bind(this);
        this.sendLoginRequest = this.sendLoginRequest.bind(this);
        this.sendCreateAccountRequest = this.sendCreateAccountRequest.bind(this)
    }

    setEmailVal = e => {
        this.setState({email: e.currentTarget.value});
    }

    setPasswordVal = e => {
        this.setState({password: e.currentTarget.value});
    }

    setFirstName = e => {
        this.setState({firstName: e.currentTarget.value});
    }

    setLastName = e => {
        this.setState({lastName: e.currentTarget.value});
    }

    toggleAccountCreate() {
        this.setState({newAccount: !this.state.newAccount});
    }

    sendLoginRequest() {
        fetch("https://016oltoux6.execute-api.us-east-1.amazonaws.com/beta/accounts/login", {
            "method": "POST",
            "body": JSON.stringify({
                userEmail: this.state.email,
                hashedPassword: this.state.password
            })
        })
            .then(response => response.json())
            .then(response => {
                if (response.success) {
                    this.setState({
                        userUUID: response.IC_UUID,
                        upidCount: response.numUPIDs,
                        userProfiles: response.associatedProfileList
                    })
                    this.context.setUserUUID({userUUID: response.IC_UUID})
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    sendCreateAccountRequest() {
        fetch("https://016oltoux6.execute-api.us-east-1.amazonaws.com/beta/accounts", {
            "method": "POST",
            "body": JSON.stringify({
                userEmail: this.state.email,
                hashedPassword: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName
            })
        })
            .then(response => response.json())
            .catch(err => {
                console.log(err)
            })
    }

    render() {

        let changeModeMsg = this.state.newAccount ? "Switch To Log In" : "Switch to Create Account";
        let submitRequestMsg = this.state.newAccount ? "Create Account" : "Log In";

        return (
            <div className="welcome-page">
                <h1 className="welcome-message">Welcome to InternConnects</h1>
                <h3 className="access-information-message">
                    InternConnects is only available to those with current .edu email address
                </h3>
                <input type="email" className="user-email" placeholder={"Enter your email"}
                       onChange={(e) => this.setEmailVal(e)}/>
                <input type="password" className="user-password" placeholder={"Enter your password"}
                       onChange={(e) => this.setPasswordVal(e)}/>
                {this.state.newAccount &&
                    <input type="text" className="user-email" placeholder={"Enter your first name"}
                           onChange={(e) => this.setFirstName(e)}/>}
                {this.state.newAccount &&
                    <input type="text" className="user-email" placeholder={"Enter your last name"}
                           onChange={(e) => this.setLastName(e)}/>}
                <button type="submit" className="log-in-button"
                        onClick={this.state.newAccount ? this.sendCreateAccountRequest : this.sendLoginRequest}>{submitRequestMsg}</button>
                <button className="switch-mode-button" onClick={this.toggleAccountCreate}>{changeModeMsg}</button>
                {/*<Link to={{*/}
                {/*    pathname: '/accountsPage',*/}
                {/*    state: {*/}
                {/*        userEmail: this.state.userEmail,*/}
                {/*        ic_uuid: this.state.ic_uuid,*/}
                {/*        profileCount: this.state.profileCount*/}
                {/*    }*/}
                {/*}}>*/}
                    <Link to="/accountsPage">
                    <button className="log-in-button">Passthrough</button>
                </Link>
            </div>
        );
    }
}

WelcomePage.contextType = UUIDContext;

export default WelcomePage;