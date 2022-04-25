import React from 'react';
import SingleMatch from '../single-match/single-match.components';

import "./match-list.styles.scss";


class MatchList extends React.Component{
    constructor(){
        super();
        this.state = {
            checkedState: true,
            newMatchList: [],
            firstRender: true
        }
    }
    

    render(){
        
        var checked = this.state.checkedState;

        var matchListProps = this.props.matchListProps;
        var receivedConnList = this.props.receivedConnList;
        var sentConnList = this.props.sentConnList;
        var acceptedConnList = this.props.acceptedConnList;
        var deniedConnList = this.props.deniedConnList;

        var originalMatchList = matchListProps;
        var receivedKeys = [...receivedConnList.keys()];

        var mappedMatchListProps = [];

        matchListProps.forEach(element => {
            if (receivedKeys.includes(element['upid'])) {
                mappedMatchListProps.push(element);
            }
        });
        
        const handleChange = () => {
            this.setState({checkedState : !checked});
            this.setState({firstRender : false});
            
            if (this.state.checkedState === true) {
                this.setState({newMatchList : mappedMatchListProps});
            }else{
                this.setState({newMatchList : originalMatchList});
            }
        };

        if (this.state.firstRender) {
            matchListProps = this.props.matchListProps;
        }else{
            matchListProps = this.state.newMatchList;
        }
        
        
        return (
            <div className='match-list-container'>
            <div className="checkbox-container"><span className='checkbox-text'>
            Show Only Users That Requested Connection</span>
                            <input
                            type="checkbox"
                            checked = {this.state.checked}
                            onChange={handleChange}
                        /></div>
                        
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
}


export default MatchList;