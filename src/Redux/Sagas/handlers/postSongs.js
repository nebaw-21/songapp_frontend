import { postSongsFailure, postSongsSuccess } from "../../actions/postSongs";
import {put, call} from 'redux-saga/effects';
import postSongsRequest from "../requests/postSongs";

export function* postSongHandler(action){
    try{
const response = yield call(postSongsRequest, action.payload);
yield put(postSongsSuccess(response.data));

    }catch(error){
        yield put(postSongsFailure(error.message));
    }
}