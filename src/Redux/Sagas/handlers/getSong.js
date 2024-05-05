import { getSongsFailure, getSongsSuccess } from "../../actions/getSongs";
import {put, call} from 'redux-saga/effects';
import getSongsRequest from "../requests/getSongs";
export function* getSongHandler(){
    try{
const response = yield call(getSongsRequest);
yield put(getSongsSuccess(response.data));
    }catch(error){
        yield put(getSongsFailure(error.message));
    }
}