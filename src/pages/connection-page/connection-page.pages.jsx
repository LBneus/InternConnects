import React from "react";
import ConnectionPageHeader from "../../components/connection-page-header/connection-page-header.components";
import MatchList from "../../components/connection-page-match-list/connection-page-match-list.components";

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