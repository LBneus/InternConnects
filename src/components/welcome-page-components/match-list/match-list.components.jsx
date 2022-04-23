import React from 'react';
import SingleMatch from '../single-match/single-match.components';

import "./match-list.styles.scss";

const MatchList = ({matchListProps, sentConnList, receivedConnList, acceptedConnList, deniedConnList}) =>{
        return (
            <div className='match-list-container'>
                {matchListProps
                    .map(({upid, ...otherMatchListProps}) => (
                    <SingleMatch key={upid} {...otherMatchListProps}
                                 sl={sentConnList}
                                 rl={receivedConnList}
                                 al={acceptedConnList}
                                 dl={deniedConnList}
                                 id={upid}/>
                    ))}
            </div>
        )
}

export default MatchList;