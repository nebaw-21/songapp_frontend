import { putSongsFailure, putSongsSuccess } from "../../actions/putSongs";
import {put, call} from 'redux-saga/effects';
import putSongsRequest from "../requests/putSongs";

export function* putSongHandler(action){
    try{
        const { songData, songId } = action.payload; 
        const response = yield call(putSongsRequest, songData, songId);

yield put(putSongsSuccess(response.data));

    }catch(error){
        yield put(putSongsFailure(error.message));
    }
}