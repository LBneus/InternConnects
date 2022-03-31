import React from "react";

import "./verify-page.styles.scss"
import {UUIDContext} from "../../UUIDContext";

class VerifyPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            email: '',
            password: '',
            verificationCode: '',
            isVerify: false,
            wasVerifyFail: false,
            verifyFailMessage: ''
        }
        this.sendVerifyRequest = this.sendVerifyRequest.bind(this);
    }

    setEmailVal = e => {
        this.setState({email: e.currentTarget.value});
    }

    setPasswordVal = e => {
        this.setState({password: e.currentTarget.value});
    }

    setVerificationCode = e => {
        this.setState({verificationCode: e.currentTarget.value});
    }

    sendVerifyRequest() {
        fetch("https://016oltoux6.execute-api.us-east-1.amazonaws.com/beta/accounts/verify", {
            "method": "PUT",
            "body": JSON.stringify({
                userEmail: this.state.email,
                hashedPassword: this.state.password,
                verificationCode: this.state.verificationCode
            })
        })
            .then(response => response.json())
            .then(response => {
                if (response.success) {
                    this.setState({ isVerify: true, wasVerifyFail: false })
                } else {
                    this.setState({ wasVerifyFail: true, verifyFailMessage: response.message })
                }
            })
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
                {!(this.state.isVerify) && <div>
                    <h3 className="access-information-message">
                        Please enter your email address, password, and verification code to verify your account.
                    </h3>

                    <input type="email" className="user-email" placeholder={"Enter your email"}
                           onChange={(e) => this.setEmailVal(e)}/>
                    <input type="password" className="user-password" placeholder={"Enter your password"}
                           onChange={(e) => this.setPasswordVal(e)}/>
                    <input type="text" className="user-email" placeholder={"Enter the verification code"}
                           onChange={(e) => this.setVerificationCode(e)}/>}

                    <button type="submit" className="log-in-button"
                            onClick={this.sendVerifyRequest}>Verify My Account</button>

                    {this.state.wasVerifyFail && <div>
                        <h3 className="access-information-message">We're sorry there was the following error in your
                            verification request:</h3>
                        <h3 className="access-information-message">{this.state.verifyFailMessage}</h3>
                        <h3 className="access-information-message">Please try again.</h3>
                    </div>}
                </div>}
                {this.state.isVerify && <h3 className="access-information-message">
                    Thank you for verifying you account. You may now log in.
                </h3>}
            </div>
        );
    }
}

VerifyPage.contextType = UUIDContext;

export default VerifyPage;