
const init={islogged:false}
const UserReducer=(state=init,action)=>
{
    
    switch(action.type)
    {
        case "SET_LOG":
            return{
            ...state,islogged:action.data
            }
        
        default:
            return state;
    }

}

export default UserReducer;