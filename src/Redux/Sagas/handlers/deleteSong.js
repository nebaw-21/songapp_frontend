import { deleteSongFailure, deleteSongSuccess } from "../../actions/deletSong";
import {put, call} from 'redux-saga/effects';
import deleteSpecificSongRequest from "../requests/deleteSong";
export function* deleteSongHandler(action){
    try{
const response = yield call(deleteSpecificSongRequest, action.payload);
yield put(deleteSongSuccess(response.data));
    }catch(error){
        yield put(deleteSongFailure(error.message));
    }
}