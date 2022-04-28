import React from "react";

import { Link } from "react-router-dom";

import "./profiles-for-accounts.styles.scss";
import {UUIDContext} from "../../../UUIDContext";

class ProfileForAccountsPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = ({loading: false});
        this.setGlobalUPID = this.setGlobalUPID.bind(this);
        this.deleteProfile = this.deleteProfile.bind(this);
    }

    setGlobalUPID () {
        const p = this.props.profile;
        this.context.setSelectedUPID({selectedUPID: p.upid})
    }

    deleteProfile(){
        const p = this.props.profile;
        this.setState({loading: true});

        fetch("https://016oltoux6.execute-api.us-east-1.amazonaws.com/beta/profiles", {
            "method": "DELETE",
            "body": JSON.stringify({
                "ic_UUID": this.context.userUUID,
                "upid": p.upid
            })
        })
            .then(response => response.json())
            .then(response => {
                this.props.recall();
            })
    }

    render() {
        const p = this.props.profile;

        if (this.state.loading) {
            return (<div className="profile-container"><div className="user-info-container"><h3>Please wait...</h3></div></div>)
        }
        return (
            <div className="profile-container">
                <Link className="user-info-container" to="/connectionPage"
                onClick={this.setGlobalUPID}>
                    <div className="user-location">{p.city}, {p.state}</div>
                    <div className="start-date">{p.arrivalMonth} {p.arrivalDay}, {p.arrivalYear}</div>
                    <div className="date-to">to</div>
                    <div className="end-date">{p.departureMonth} {p.departureDay}, {p.departureYear}</div>
                </Link>
                <div className="remove-button-for-profile" onClick={this.deleteProfile}>(remove)</div>
            </div>
        )
    }
}

ProfileForAccountsPage.contextType = UUIDContext;

export default ProfileForAccountsPage;