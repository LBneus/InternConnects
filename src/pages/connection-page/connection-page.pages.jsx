import React from "react";
import ConnectionPageHeader from "../../components/welcome-page-components/header-for-match-list/header-match-list.components";
import MatchList from "../../components/welcome-page-components/match-list/match-list.components";


import "./connection-page.styles.scss";
import { UUIDContext } from "../../UUIDContext";
import {Redirect} from "react-router-dom";

class ConnectionPage extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            matchCount: 0,
            matchList: [],
            userProfile: Object,

            connectionsSent: [],
            connectionsReceived: [],
            connectionsAccepted: [],
            connectionsDenied: [],

            location: '',
            arrivalDate: '',
            departureDate: '',
            wait: true
        };
        this.fetchDataForPage = this.fetchDataForPage.bind(this)
    }

    componentDidMount() {
        this.fetchDataForPage()
    }

    fetchDataForPage() {
        fetch("https://016oltoux6.execute-api.us-east-1.amazonaws.com/beta/match", {
            "method": "GET",
            "headers": { IC_UUID: this.context.userUUID, IC_UPID: this.context.selectedUPID }
        })
            .then(response => response.json())
            .then(response => {
                if (response.success) {
                    this.setState({
                        matchCount: response.profileCount,
                        userProfile: response.myProfile,
                        matchList: response.profileList,
                    });
                }
            })
        fetch("https://016oltoux6.execute-api.us-east-1.amazonaws.com/beta/connect", {
            "method": "GET",
            "headers": {IC_UUID: this.context.userUUID, IC_UPID: this.context.selectedUPID }
        })
            .then(response => response.json())
            .then(response => {
                if (response.success) {

                    let sConns = new Map(Object.entries(response.outstandingSentConns));
                    let rConns = new Map(Object.entries(response.outstandingReceivedConns));
                    let aConns = new Map(Object.entries(response.acceptedConns));
                    let dConns = new Map(Object.entries(response.deniedConns));
                    console.log(sConns);
                    console.log(rConns);
                    console.log(aConns);
                    console.log(dConns);

                    this.setState({
                        connectionsSent: sConns,
                        connectionsReceived: rConns,
                        connectionsAccepted: aConns,
                        connectionsDenied: dConns
                    })
                    this.setState({wait: false});
                }
            })
    }


    render() {
        let uuid = this.context.userUUID;
        if (uuid.toString() === '') {
            return(
                <Redirect to={"/"}/>
            )
        }

        let upid = this.context.selectedUPID;
        if (upid.toString() === '') {
            return(
                <Redirect to={"/accountsPage"}/>
            )
        }

        if (this.state.wait) {
            return (<div>Loading</div>)
        }

        return (
            <div>
                <ConnectionPageHeader userName={'intern-connects'} userProfileData={this.state.userProfile} userConnectionsReceived={this.state.connectionsReceived}/>
                {this.state.matchList.length > 0 ? 
                <MatchList matchListProps={this.state.matchList}
                           sentConnList={this.state.connectionsSent}
                           receivedConnList={this.state.connectionsReceived}
                           acceptedConnList={this.state.connectionsAccepted}
                           deniedConnList={this.state.connectionsDenied}/>
                : <></>
                }
            </div>
        );
    }
}

ConnectionPage.contextType = UUIDContext;

export default ConnectionPage;