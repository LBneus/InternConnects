import React from "react";

import { Link } from "react-router-dom";

import "./profiles-for-accounts.styles.scss";
import {UUIDContext} from "../../../UUIDContext";

class ProfileForAccountsPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.setGlobalUPID = this.setGlobalUPID.bind(this);
    }

    setGlobalUPID () {
        const p = this.props.profile;
        this.context.setSelectedUPID({selectedUPID: p.upid})
    }

    render() {
        const p = this.props.profile;
        return (
            <Link to="/connectionPage"
                  onClick={this.setGlobalUPID}
                  className="profile-container">
                <div className="user-location">{p.city}, {p.state}</div>
                <div className="start-date">{p.arrivalMonth} {p.arrivalDay}, {p.arrivalYear}</div>
                <div className="date-to">to</div>
                <div className="end-date">{p.departureMonth} {p.departureDay}, {p.departureYear}</div>
            </Link>
        )
    }
}

ProfileForAccountsPage.contextType = UUIDContext;

export default ProfileForAccountsPage;