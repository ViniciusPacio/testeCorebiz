import React, { useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) =>{
    const [qtProduct,setQtProduct]=useState(0)

    return(
        <AuthContext.Provider value={{qtProduct,setQtProduct}}>
            {props.children}
        </AuthContext.Provider>
    )
}