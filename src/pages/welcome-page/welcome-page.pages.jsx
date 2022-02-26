import React from "react";
import FormInput from "../../components/form-input/form-input.components";

import "./welcome-page.styles.scss"


const WelcomePage = () => (

    <div className="welcome-page">
        <h1 className="welcome-message">Welcome to InternConnects</h1>
        <h3 className="access-information-message">
            InternConnects is only available to those with current .edu email address
        </h3>
        <FormInput placeholder={"Please enter your email for access"}/>
    </div>
)

export default WelcomePage;