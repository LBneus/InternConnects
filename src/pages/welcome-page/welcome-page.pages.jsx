import React from "react";
import {Link} from "react-router-dom";

import "./welcome-page.styles.scss"


const WelcomePage = () => (

    <div className="welcome-page">
        <h1 className="welcome-message">Welcome to InternConnects</h1>
        <h3 className="access-information-message">
            InternConnects is only available to those with current .edu email address
        </h3>
        <input type="email" className="user-email" placeholder={"Enter your email"}/>
        <input type="password" className="user-password" placeholder={"Enter your password"}/>
        <Link to="/accountsPage">
            <button className="log-in-button">Log In</button>
        </Link>
    </div>
)

export default WelcomePage;