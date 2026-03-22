const githubReducer=(state,action)=>{
    switch (action.type){

        // This "case" means that the return statement will only run if and only if when we dispatch(format for dispatch is:- dispatch({type:"GET_USERS", payload:data,}))
        // the payload is used to hold the current data
        // The reducer function receives the current state and the action object. It uses the action.type to determine the operation and accesses action.payload to get the necessary data.
        case "GET_USERS":
            return{
                ...state,
                users:action.payload,
                loading:false,
                
            }

        case "SET_LOADING":
            return{
                ...state,
                loading:true,
            }    
        default:
            return state
    }
}
export default githubReducer