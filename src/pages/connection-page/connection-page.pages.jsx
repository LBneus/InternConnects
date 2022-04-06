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

            location: '',
            arrivalDate: '',
            departureDate: ''
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

        return (
            <div>
                <ConnectionPageHeader userName={'alex-erwin'} userProfileData={this.state.userProfile}/>
                {this.state.matchList.length > 0 ? 
                <MatchList matchListProps={this.state.matchList}/>
                : <></>
                }
            </div>
        );
    }
}

ConnectionPage.contextType = UUIDContext;

export default ConnectionPage;