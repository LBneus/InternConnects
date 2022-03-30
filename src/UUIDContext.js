import React from "react";

const defaultUUID = {userUUID: {}}
export const UUIDContext = React.createContext(defaultUUID);

export class UUIDContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.setUserUUID = this.setUserUUID.bind(this)
        this.state = {
            userUUID: '',
            setUserUUID: this.setUserUUID
        };
    }

    setUserUUID = (values) => {
        this.setState(values);
    }

    render() {
        return (
            <UUIDContext.Provider value={{userUUID: this.state.userUUID, setUserUUID: this.state.setUserUUID}}>
                {this.props.children}
            </UUIDContext.Provider>
        )
    }
}