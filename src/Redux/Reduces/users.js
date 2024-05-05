import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE,
        LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
    GET_SPECIFIC_USER_START, GET_SPECIFIC_USER_SUCCESS, GET_SPECIFIC_USER_FAILURE} from "../actionTypes";

const initialState = {
users:[],
isLoading: true,
error:null,
}

const reducers = (state = initialState , action)=>{
switch(action.type){
    
   case REGISTER_REQUEST:{
    return {...state, isLoading:true};
   }

   case REGISTER_SUCCESS:{
       const CreateUsers = [...state.users, action.payload]
       return {...state, isLoading:false, users:CreateUsers}; 
   }

   case REGISTER_FAILURE:{
       return {...state, isLoading:false, error:action.payload}; 
   }

   case LOGIN_REQUEST:{
    return {...state, isLoading:true};
   }

   case LOGIN_SUCCESS:{
       const loginUser = [...state.users, action.payload]
       return {...state, isLoading:false, users:loginUser}; 
   }

   case LOGIN_FAILURE:
    return {
      ...state,
      error: action.payload
    };

    
       case GET_SPECIFIC_USER_START: {
           return { ...state, isLoading: true };
         }
     
         case GET_SPECIFIC_USER_SUCCESS: {
           return { ...state, isLoading: false, users: action.payload };
         }
     
         case GET_SPECIFIC_USER_FAILURE: {
           return { ...state, isLoading: false, error: action.payload };
         }
    
   default:{
       return state;
   }
}
}

export default reducers;