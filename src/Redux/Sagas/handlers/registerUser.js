import { postUserSuccess, postUserFailure } from "../../actions/registerUser";
import {put, call} from 'redux-saga/effects';
import postUserRequest from "../requests/registerUsers";

export function* registerUserHandler(action){
    try{
const response = yield call(postUserRequest, action.payload);
yield put(postUserSuccess(response.data));

    }catch(error){
        yield put(postUserFailure(error.message));
    }
}