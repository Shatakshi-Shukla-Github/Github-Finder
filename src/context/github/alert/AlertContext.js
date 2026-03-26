import {createContext,useReducer} from "react"
import alertReducer from "./AlertReducer"
const AlertContext=createContext()

export const AlertProvider=({children})=>{
    const initialState=null

    //useReducer() RETURNS two things i.e. state-> current data & dispatch-> function to update state. So useReducer(...) → [state, dispatch]
    //alertReducer → logic (HOW to update) & initialState → starting value
    const [state,dispatch]=useReducer(alertReducer,initialState)
    const setAlert=(msg,type)=>{
        dispatch({
            type:"SET_ALERT",
            payload:{msg,type}
        })

        //We are using setTimeout because we want the alert to disappear after a particular time period
        setTimeout(()=>dispatch({type:"REMOVE_ALERT"}),3000)
    }
    return <AlertContext.Provider value={{alert:state,setAlert}}>
        {children}
    </AlertContext.Provider>
}

export default AlertContext

// You create a context
// A Provider component is used higher in the component tree to wrap the components that need access to the data. It accepts a value prop.
// Any component nested within the Provider can consume the value using the useContext hook.