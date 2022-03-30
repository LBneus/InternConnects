import React from "react";
import ConnectionPageHeader from "../../components/welcome-page-components/header-for-match-list/header-match-list.components";
import MatchList from "../../components/welcome-page-components/match-list/match-list.components";


import "./connection-page.styles.scss";
import { UUIDContext } from "../../UUIDContext";

class ConnectionPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <ConnectionPageHeader userName={'alex-erwin'}/>
                <MatchList/>
                <h1>Current UPID {this.context.selectedUPID}</h1>
                <h1>Current UUID {this.context.userUUID}</h1>
            </div>
        );
    }
}

ConnectionPage.contextType = UUIDContext;

export default ConnectionPage;