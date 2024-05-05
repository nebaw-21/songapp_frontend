import { getSpecificSongFailure, getSpecificSongSuccess } from "../../actions/getSpecificSong";
import {put, call} from 'redux-saga/effects';
import getSpecificSongRequest from "../requests/getSpecificSong";
export function* getSpecificSongHandler(action){
    try{
const response = yield call(getSpecificSongRequest, action.payload);
yield put(getSpecificSongSuccess(response.data));
    }catch(error){
        yield put(getSpecificSongFailure(error.message));
    }
}