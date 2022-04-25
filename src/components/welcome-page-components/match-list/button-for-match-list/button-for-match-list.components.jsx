import React from "react";

import "./button-for-match-list.styles.scss";
import {UUIDContext} from "../../../../UUIDContext";

class ButtonMatchList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            acceptedConns: props.al,
            receivedConns: props.rl,
            sentConns: props.sl,
            deniedConns: props.dl,
            profileUPID: props.id,
            connStatus: "none",
            buttonMessage: "",
        }
        this.determineStatus = this.determineStatus.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
        this.sendConnection = this.sendConnection.bind(this);
        this.sendAcceptConnection = this.sendAcceptConnection.bind(this);
        this.sendRejectConnection = this.sendRejectConnection.bind(this);
    }

    componentDidMount() {
        this.determineStatus();
        console.log(this.state.receivedConns)
        console.log(this.state.deniedConns)
    }

    sendRequest() {
        switch (this.state.connStatus) {
            case "none":
                this.sendConnection();
                break;
            case "received":
                this.sendAcceptConnection();
                break;
            default:
                break;
        }
    }

    sendConnection() {
        this.setState({connStatus: "sent", buttonMessage: "Request Sent!"});
        fetch("https://016oltoux6.execute-api.us-east-1.amazonaws.com/beta/connect", {
            "method": "POST",
            "body": JSON.stringify({
                requestorUUID: this.context.userUUID,
                requestorUPID: this.context.selectedUPID,
                requesteeUPID: this.state.profileUPID,
                connectionMessage: "Test Message"
            })
        })
    }

    sendAcceptConnection() {
        this.setState({connStatus: "accepted", buttonMessage: "Connected!"});
        fetch("https://016oltoux6.execute-api.us-east-1.amazonaws.com/beta/connect", {
            "method": "PUT",
            "body": JSON.stringify({
                requestorUUID: this.context.userUUID,
                requestorUPID: this.context.selectedUPID,
                URID: this.state.receivedConns.get(this.state.profileUPID)
            })
        })
    }

    sendRejectConnection() {
        this.setState({connStatus: "denied", buttonMessage: "Connection Declined"});
        fetch("https://016oltoux6.execute-api.us-east-1.amazonaws.com/beta/connect", {
            "method": "DELETE",
            "body": JSON.stringify({
                requestorUUID: this.context.userUUID,
                requestorUPID: this.context.selectedUPID,
                URID: this.state.receivedConns.get(this.state.profileUPID)
            })
        })
    }

    determineStatus() {
        if (this.state.sentConns.has(this.state.profileUPID)) {
            this.setState({connStatus: "sent", buttonMessage: "Request Sent!"});
        } else if (this.state.receivedConns.has(this.state.profileUPID)) {
            this.setState({connStatus: "received", buttonMessage: "received"});
        } else if (this.state.acceptedConns.has(this.state.profileUPID)) {
            this.setState({connStatus: "accepted", buttonMessage: "Connected!"});
        } else if (this.state.deniedConns.has(this.state.profileUPID)) {
            this.setState({connStatus: "denied", buttonMessage: "Connection Declined"});
        } else {
            this.setState({buttonMessage: "Connect"})
        }
    }



    render() {
        console.log(this.state.connStatus);
        if(this.state.connStatus === "received"){
            return(
                <div className="accept-deny-buttons">
                    <div className="accept-button">Accept</div>
                    <div className="deny-button">Deny</div>
                </div>
            )
        }
        else{
            return (
                <button className="button-match-list" onClick={this.sendRequest}>
                    {this.state.buttonMessage}
                </button>
            )
        }
    }
}

ButtonMatchList.contextType = UUIDContext;

export default ButtonMatchList;