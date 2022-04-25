import React from 'react';
import SingleMatch from '../single-match/single-match.components';

import "./match-list.styles.scss";


class MatchList extends React.Component{
    constructor(){
        super();
        this.state = {
            checkedState: false,
            currList: [],
            fullList: [],
            connsList: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        let matchListProps = this.props.matchListProps;
        let receivedConnList = this.props.receivedConnList;
        let sentConnList = this.props.sentConnList;
        let acceptedConnList = this.props.acceptedConnList;
        let deniedConnList = this.props.deniedConnList;

        let receivedKeys = [...receivedConnList.keys()];
        let mappedMatchListProps = [];
        matchListProps.forEach(element => {
            if (receivedKeys.includes(element['upid'])) {
                mappedMatchListProps.push(element);
            }
        });

        this.setState({
            fullList: matchListProps,
            currList: matchListProps,
            connsList: mappedMatchListProps
        })
    }

    handleChange() {
        if (this.state.checkedState) {
            this.setState({checkedState: false, currList: this.state.fullList})
        } else {
            this.setState({checkedState: true, currList: this.state.connsList})
        }
    }

    render() {

        let list = this.state.currList.length === 0 ?
            <div className="no-requests-message">We're sorry, currently there are no users who have sent you connection requests.<br/>Trying sending some yourself!</div> :
            this.state.currList
            .map(({upid, ...otherMatchListProps}) => (
                <SingleMatch key={upid} {...otherMatchListProps}
                             sl={this.props.sentConnList}
                             rl={this.props.receivedConnList}
                             al={this.props.acceptedConnList}
                             dl={this.props.deniedConnList}
                             id={upid}/>
            ))

        return (
            <div>
                <br/>
                <div className='filter-list-container'>
                    <div className="checkbox-container" onClick={this.handleChange}>
                        <span className='checkbox-text'>
            Show Only Users Who Wish To Connect</span>
                        <input
                            type="checkbox"
                            checked={this.state.checkedState}/>
                    </div>
                </div>
                <div className='match-list-container'>
                    {list}
                </div>
            </div>
        )
    }
}


export default MatchList;