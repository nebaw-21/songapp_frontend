import { GET_SONGS_START,POST_SONGS_START, GET_SPECIFIC_SONGS_START, 
    REGISTER_REQUEST ,PUT_SONGS_START, DELETE_SONGS_START, LOGIN_REQUEST, GET_SPECIFIC_USER_START} from "../actionTypes";
import {takeEvery} from 'redux-saga/effects';
import { getSongHandler } from "./handlers/getSong";
import { postSongHandler } from "./handlers/postSongs";
import { putSongHandler } from "./handlers/putSong";
import {getSpecificSongHandler} from "./handlers/getSpecificSong"
import {deleteSongHandler} from "./handlers/deleteSong";
import {registerUserHandler} from "./handlers/registerUser";
import {loginUserHandler} from "./handlers/loginUser";
import {getSpecificUserHandler} from "./handlers/getSpecificUser";
export function* watcherSaga(){
yield takeEvery(GET_SONGS_START, getSongHandler);
yield takeEvery(GET_SPECIFIC_SONGS_START, getSpecificSongHandler);
yield takeEvery(POST_SONGS_START, postSongHandler);
yield takeEvery(DELETE_SONGS_START, deleteSongHandler);
yield takeEvery(PUT_SONGS_START, putSongHandler);
yield takeEvery(REGISTER_REQUEST,registerUserHandler );
yield takeEvery(LOGIN_REQUEST,loginUserHandler );
yield takeEvery(GET_SPECIFIC_USER_START,getSpecificUserHandler );
}