import { GET_SPECIFIC_SONGS_START, GET_SPECIFIC_SONGS_SUCCESS, GET_SPECIFIC_SONGS_FAILURE } from "../actionTypes";

export const getSpecificSong = (songId) => ({
  type: GET_SPECIFIC_SONGS_START,
  payload: songId // Pass the songId as payload
});

export const getSpecificSongSuccess = (payload) => ({
  type: GET_SPECIFIC_SONGS_SUCCESS,
  payload,
});

export const getSpecificSongFailure = (payload) => ({
  type: GET_SPECIFIC_SONGS_FAILURE,
  payload,
});
