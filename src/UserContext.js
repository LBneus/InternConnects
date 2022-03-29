import React from "react";

export const UserContext = React.createContext({});

const UserContextProvider = props => {

    const [userUUID, setUserUUID] = React.useState("");
    // const [selectedUPID, setSelectedUPID] = React.useState("");

    return (
        <UserContext.Provider value={{ userUUPID: [userUUID, setUserUUID]}}>
            {/*setSelectedUPID: [selectedUPID, setSelectedUPID]}}>*/}
            {props.children}
        </UserContext.Provider>
    )
}

const UserContextConsumer = ({children}) => {
    return (
        <UserContext.Consumer>
            {(context) => {return children(context)}}
        </UserContext.Consumer>
    )
}

const useUserContext = () => {
    return React.useContext(UserContext);
}

export {UserContextProvider, UserContextConsumer, useUserContext}

// class UserContextProvider extends React.Component {
//     state = {
//         userUUID:'',
//         selectedUPID:''
//     }
//
//     setUUID = (uuid) => {
//         this.setState({ userUUID: uuid })
//     }
//
//     setUPID = (upid) => {
//         this.setState({ selectedUPID: upid})
//     }
//
//     render() {
//         return (
//             <UserContext.Provider value= {
//                 { state: this.state,
//                     setUserUUID: ((value) => this.setState({
//                         userUUID: value
//                     }))
//                     setSelectedUUID: (value) => this.set}}>
//                 {this.props.children}
//             </UserContext.Provider>
//         )
//     }
// }