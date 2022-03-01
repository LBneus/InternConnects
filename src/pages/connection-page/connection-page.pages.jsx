import React from "react";
import ConnectionPageHeader from "../../components/connection-page-header/connection-page-header.components";

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
            </div>
        );
    }
}

export default ConnectionPage;