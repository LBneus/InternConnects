import React from "react";
import ConnectionPageHeader from "../../components/welcome-page-components/header-for-match-list/header-match-list.components";
import MatchList from "../../components/welcome-page-components/match-list/match-list.components";

import "./connection-page.styles.scss";

class ConnectionPage extends React.Component{
    constructor(){
        super();

        this.state = {};
    }

    render() {
        return (
            <div>
                <ConnectionPageHeader/>
                <MatchList/>
            </div>
        );
    }
}

export default ConnectionPage;