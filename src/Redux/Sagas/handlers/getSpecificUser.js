import { getSpecificUserFailure, getSpecificUserSuccess } from "../../actions/getSpecificUser";
import {put, call} from 'redux-saga/effects';
import getSpecificUserRequest from "../requests/getSpecificUser";
export function* getSpecificUserHandler(action){
    try{
const response = yield call(getSpecificUserRequest, action.payload);
yield put(getSpecificUserSuccess(response.data));
    }catch(error){
        yield put(getSpecificUserFailure(error.message));
    }
}