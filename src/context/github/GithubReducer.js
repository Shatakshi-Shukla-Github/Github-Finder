const githubReducer=(state,action)=>{
    switch (action.type){

        // This "case" means that the return statement will only run if and only if when we dispatch(format for dispatch is:- dispatch({type:"GET_USERS", payload:data,}))
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