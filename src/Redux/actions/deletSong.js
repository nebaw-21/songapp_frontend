import { DELETE_SONGS_FAILURE, DELETE_SONGS_START, DELETE_SONGS_SUCCESS } from "../actionTypes";

export const deleteSong = (songId) => ({
  type: DELETE_SONGS_START,
  payload: songId // Pass the songId as payload
});

export const deleteSongSuccess = (payload) => ({
  type: DELETE_SONGS_SUCCESS,
  payload,
});

export const deleteSongFailure = (payload) => ({
  type: DELETE_SONGS_FAILURE,
  payload,
});
