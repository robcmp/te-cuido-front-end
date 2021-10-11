<<<<<<< HEAD
import React, { useState, useEffect } from "react"
import { getState } from "./flux";
=======
import React, { useState, useEffect } from "react";
import {getState} from "./flux";

>>>>>>> fd610b5dba7fcacc9fa15401105ef0cb36147b21

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
    const StoreWrapper = (props) => {
        const [state, setState] = useState(
            getState({
<<<<<<< HEAD
                getActions: ()=> state.actions,
=======
                getActions: () => state.actions,
>>>>>>> fd610b5dba7fcacc9fa15401105ef0cb36147b21
                getStore: () => state.store,
                setStore: updatedStore => setState({
                    store: Object.assign(state.store, updatedStore),
                    actions: {...state.actions}
                })
            })
        );

<<<<<<< HEAD
        useEffect(() => {

        }, []);

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props}/>
            </Context.Provider>
=======
        useEffect(()=> {
       
        }, [])
            
        return ( 
        <Context.Provider value={state}>
            <PassedComponent {...props}/>
        </Context.Provider>
>>>>>>> fd610b5dba7fcacc9fa15401105ef0cb36147b21
        );
    };
    return StoreWrapper;
};

<<<<<<< HEAD
export default injectContext; 
=======
export default injectContext;
>>>>>>> fd610b5dba7fcacc9fa15401105ef0cb36147b21
