import React from 'react';
import SingleMatch from '../single-match/single-match.components';

import "./match-list.styles.scss";

class MatchList extends React.Component {

    render() {
        return (
            <div className='match-list-container'>
                <SingleMatch userName='steve-j' position='SDE Intern at Apple'/>
                <SingleMatch userName='bill-g' position='SDE Intern at Microsoft'/>
                <SingleMatch userName='steve-b' position='PM Intern at Google'/>
            </div>
        )
    }
}

export default MatchList;