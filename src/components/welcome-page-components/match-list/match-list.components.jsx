import React from 'react';
import SingleMatch from '../single-match/single-match.components';

import "./match-list.styles.scss";

const MatchList = () => (
    <div className='match-list-container'>
        <SingleMatch userName='steve-j' position='SDE intern at Apple'/>
        <SingleMatch userName='bill-g' position='SDE intern at Microsoft'/>
        <SingleMatch userName='steve-b' position='PM intern at Google'/>
    </div>
)

export default MatchList;