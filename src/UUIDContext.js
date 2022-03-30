import React from "react";

const defaultUUID = {userUUID: {}}
export const UUIDContext = React.createContext(defaultUUID);

export class UUIDContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.setUserUUID = this.setUserUUID.bind(this)
        this.state = {
            userUUID: '',
            setUserUUID: this.setUserUUID,
            selectedUPID: '',
            setSelectedUPID: this.setSelectedUPID
        };
    }

    setUserUUID = (values) => {
        this.setState(values);
    }

    setSelectedUPID = (values) => {
        this.setState(values)
    }

    render() {
        return (
            <UUIDContext.Provider value={{userUUID: this.state.userUUID,
                setUserUUID: this.state.setUserUUID,
                selectedUPID: this.state.selectedUPID,
                setSelectedUPID: this.state.setSelectedUPID}}>
                {this.props.children}
            </UUIDContext.Provider>
        )
    }
}