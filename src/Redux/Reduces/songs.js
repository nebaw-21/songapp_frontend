import { GET_SONGS_FAILURE, GET_SONGS_START, GET_SONGS_SUCCESS ,
         POST_SONGS_FAILURE, POST_SONGS_START, POST_SONGS_SUCCESS,
         PUT_SONGS_START, PUT_SONGS_SUCCESS, PUT_SONGS_FAILURE,
        DELETE_SONGS_START,DELETE_SONGS_SUCCESS,DELETE_SONGS_FAILURE,
        GET_SPECIFIC_SONGS_START, GET_SPECIFIC_SONGS_SUCCESS, GET_SPECIFIC_SONGS_FAILURE} from "../actionTypes";

const initialState = {
    songs:[],
    isLoading: true,
    error:null,
}

const reducers = (state = initialState , action)=>{
    switch(action.type){
        case GET_SONGS_START: {
            return {...state, isLoading:true};
        }

        case GET_SONGS_SUCCESS: {
            return {...state, isLoading:false, songs:action.payload};
        }

        case GET_SONGS_FAILURE: {
            return {...state, isLoading:false, error:action.payload};
        }

        case GET_SPECIFIC_SONGS_START: {
            return { ...state, isLoading: true };
          }
      
          case GET_SPECIFIC_SONGS_SUCCESS: {
            return { ...state, isLoading: false, songs: action.payload };
          }
      
          case GET_SPECIFIC_SONGS_FAILURE: {
            return { ...state, isLoading: false, error: action.payload };
          }

          case  DELETE_SONGS_START: {
            return { ...state, isLoading: true };
          }
      
          case  DELETE_SONGS_SUCCESS: {
            return { ...state, isLoading: false, songs: action.payload };
          }
      
          case  DELETE_SONGS_FAILURE: {
            return { ...state, isLoading: false, error: action.payload };
          }


        case POST_SONGS_START:{
         return {...state, isLoading:true};
        }

        case POST_SONGS_SUCCESS:{
            const CreateSongs = [...state.songs, action.payload]
            return {...state, isLoading:false, songs:CreateSongs}; 
        }

        case POST_SONGS_FAILURE:{
            return {...state, isLoading:false, error:action.payload}; 
        }

        case PUT_SONGS_START:{
            return {...state, isLoading:true};
           }
   
           case PUT_SONGS_SUCCESS: {
            const updatedSongs = state.songs.map((song) => {
              if (song.id === action.payload.id) {
                return action.payload; // Replace the song with the updated data
              }
              return song; // Keep the song as it is
            });
          
            return {
              ...state,
              isLoading: false,
              songs: updatedSongs,
            };
          }
   
           case PUT_SONGS_FAILURE:{
               return {...state, isLoading:false, error:action.payload}; 
           }



        default:{
            return state;
        }
    }
}

export default reducers;