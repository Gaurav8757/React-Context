/* eslint-disable react/prop-types */

import React from "react";

import UserContext from "./userContext";


const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);

    return (
        // destructure array of usestate
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContextProvider;