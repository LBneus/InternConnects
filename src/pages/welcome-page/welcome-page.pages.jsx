import React from "react";

import "./welcome-page.styles.scss"

import { UUIDContext } from "../../UUIDContext";
import {Redirect} from "react-router-dom";

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
            response: '',

            loading: false,
            blankField: false,
            nonEduEmail: false
        }
        this.toggleAccountCreate = this.toggleAccountCreate.bind(this);
        this.sendLoginRequest = this.sendLoginRequest.bind(this);
        this.sendCreateAccountRequest = this.sendCreateAccountRequest.bind(this)
    }

    setEmailVal = e => {
        this.setState({email: e.currentTarget.value, blankField: false, nonEduEmail: false});
    }

    setPasswordVal = e => {
        this.setState({password: e.currentTarget.value, blankField: false});
    }

    setFirstName = e => {
        this.setState({firstName: e.currentTarget.value, blankField: false});
    }

    setLastName = e => {
        this.setState({lastName: e.currentTarget.value, blankField: false});
    }

    toggleAccountCreate() {
        if (this.state.newAccount === true) {
            this.setState({ blankField: false });
        }
        this.setState({newAccount: !this.state.newAccount});
    }

    sendLoginRequest() {
        if ((this.state.email === '') || (this.state.password === '')) {
            this.setState({ blankField: true });

        } else if (!(this.state.email.toString().endsWith('.edu'))) {
            this.setState({ nonEduEmail: true });

        } else {
            this.setState({loading: true});
            fetch("https://016oltoux6.execute-api.us-east-1.amazonaws.com/beta/accounts", {
                "method": "GET",
                "headers": {User_Email: this.state.email, Hashed_Password: this.state.password}
            })
                .then(response => response.json())
                .then(response => {
                    if (response.success) {
                        this.setState({
                            userUUID: response.IC_UUID,
                        })
                        this.context.setUserUUID({userUUID: response.IC_UUID})
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    sendCreateAccountRequest() {
        if ((this.state.email === '') || (this.state.password === '')
            || (this.state.firstName === '') || (this.state.lastName === '')) {
            this.setState({blankField: true});

        } else if (!(this.state.email.endsWith('.edu'))) {
            this.setState({nonEduEmail: true});

        } else {
            this.setState({loading: true});
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
                .then(response => {
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    render() {
        let uuid = this.context.userUUID;
        if (uuid.toString() !== '') {
            return (
                <Redirect to={"/accountsPage"}/>
            )
        }

        let changeModeMsg = this.state.newAccount ? "Switch To Log In" : "Switch to Create Account";
        let submitRequestMsg = this.state.newAccount ? "Create Account" : "Log In";
        let loadingMessage = this.state.newAccount ? "Creating Account..." : "Logging In...";
        let buttonMessage = this.loading ? loadingMessage : submitRequestMsg;

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

                {this.state.blankField &&
                    <h6>Error: All fields must not be empty</h6>}

                {this.state.nonEduEmail && <h6>Error: You must use a .edu email address</h6>}


                <button type="submit" className="log-in-button"
                        onClick={this.state.newAccount ? this.sendCreateAccountRequest : this.sendLoginRequest}>{buttonMessage}</button>
                <button className="switch-mode-button" onClick={this.toggleAccountCreate}>{changeModeMsg}</button>
            </div>
        );
    }
}

WelcomePage.contextType = UUIDContext;

export default WelcomePage;