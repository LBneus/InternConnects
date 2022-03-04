import React from 'react';
import SingleMatch from '../match-list-single-match/match-list-single-match.components';

import "./connection-page-match-list.styles.scss";

const MatchList = () => (
    <div className='match-list-container'>
        <SingleMatch userName='steve-j'/>
        <SingleMatch userName='bill-g'/>
        <SingleMatch userName='steve-b'/>
    </div>
)

export default MatchList;