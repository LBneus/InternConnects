import React from "react";

import NameAndPosition from "./name-and-position/name-and-position.components";
import QuickInfo from "./quick-info/quick-info.components";

import "./name-and-info.styles.scss";

const NameAndInfo = ({userName, position}) => (
    <div className="name-and-info">
        <NameAndPosition userName={userName} position={position}/>
        <QuickInfo/>
    </div>
)

export default NameAndInfo;