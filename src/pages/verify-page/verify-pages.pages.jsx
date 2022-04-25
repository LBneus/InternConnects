import React from "react";

import "./verify-page.styles.scss"
import {UUIDContext} from "../../UUIDContext";
import {Redirect} from "react-router-dom";

class VerifyPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            email: '',
            password: '',
            verificationCode: '',
            isVerify: false,
            wasVerifyFail: false,
            verifyFailMessage: '',
            loading: false,
            rdx: false,
        }
        this.sendVerifyRequest = this.sendVerifyRequest.bind(this);
        this.takeMeHome = this.takeMeHome.bind(this);
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
        this.setState({loading: true})
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
                this.setState({loading: false})
                if (response.successful) {
                    this.setState({ isVerify: true, wasVerifyFail: false })
                } else {
                    this.setState({ wasVerifyFail: true, verifyFailMessage: response.message })
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    takeMeHome() {
        this.setState({rdx: true})
    }

    render() {

        let buttonMsg = this.state.loading ? "Processing..." : "Verify My Account";

        if (this.state.rdx) {
            return (<Redirect to={"/"}/>)
        }

        return (
            <div className="verify-page">

                <h1 className="verify-message">Welcome to InternConnects</h1>
                {!(this.state.isVerify) && <div className="inputs-container">
                    <div className="access-information-message">
                        Please enter your email address, password, and verification code to verify your account.
                    </div>

                    <div className="user-email-container">
                        <input type="email" className="user-email" placeholder={"Enter your email"}
                               onChange={(e) => this.setEmailVal(e)}/>
                    </div>

                    <div className="user-password-container">
                        <input type="password" className="user-password" placeholder={"Enter your password"}
                               onChange={(e) => this.setPasswordVal(e)}/>
                    </div>

                    <div className="verification-code-container">
                        <input type="text" className="verification-code" placeholder={"Enter the verification code"}
                               onChange={(e) => this.setVerificationCode(e)}/>
                    </div>

                    <button type="submit" className="log-in-button"
                            onClick={this.sendVerifyRequest}>{buttonMsg}</button>

                    {this.state.wasVerifyFail && <div align="center">
                        <br/>
                        <div className="access-information-message">We're sorry there was the following error in your
                            verification request:
                        </div>
                        <div className="access-information-message">{this.state.verifyFailMessage}</div>
                        <div className="access-information-message">Please try again.</div>
                    </div>}
                </div>}
                {this.state.isVerify && <div>
                    <div>
                        Thank you for verifying you account.
                        <br/>
                        You may now log in.
                        <br/>
                    </div>
                    <button type="submit" className="home-button" onClick={this.takeMeHome}>Take
                        me to the homepage.
                    </button>
                </div>}
            </div>
        );
    }
}

VerifyPage.contextType = UUIDContext;

export default VerifyPage;