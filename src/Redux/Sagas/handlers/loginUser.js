import { loginUserSuccess, loginUserFailure } from "../../actions/loginLogin";
import {put, call} from 'redux-saga/effects';
import postUserRequest from "../requests/loginUser";

export function* loginUserHandler(action){
    try {
        const response = yield call(postUserRequest, action.payload);
        // Store token in local storage upon successful login
        localStorage.setItem('token', response.data);
        // Redirect user to home page or perform additional actions as needed
        window.location.href = "/";
        // Dispatch success action
        yield put(loginUserSuccess(response.data));
      } catch (error) {
        // Dispatch failure action
        yield put(loginUserFailure(error.message));
      }
}