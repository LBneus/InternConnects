import React from 'react';
import SingleMatch from '../single-match/single-match.components';

import "./match-list.styles.scss";

const MatchList = ({matchListProps}) =>{

    console.log(matchListProps);
        return (
            <div className='match-list-container'>
                {matchListProps
                    .map(({upid, ...otherMatchListProps}) => (
                    <SingleMatch key={upid} {...otherMatchListProps}/>
                    ))}
            </div>
        )
}

export default MatchList;