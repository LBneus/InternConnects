import React from "react";

import NameAndPosition from "./name-and-position/name-and-position.components";
import QuickInfo from "./quick-info/quick-info.components";

import "./name-and-info.styles.scss";

const NameAndInfo = ({NameAndInfoProps}) => (
    <div className="name-and-info">
        <NameAndPosition firstName={NameAndInfoProps.firstName} lastName={NameAndInfoProps.lastName} position={NameAndInfoProps.relocationPurpose}/>
        <QuickInfo QuickInfoProps={NameAndInfoProps}/>
    </div>
)

export default NameAndInfo;