import { PUT_SONGS_START,PUT_SONGS_FAILURE, PUT_SONGS_SUCCESS } from "../actionTypes"


export const putSongs = (songData, songId) => (
  {
    type:PUT_SONGS_START,
    payload:{songData, songId}
  }
)

export const putSongsSuccess = (songData) => (
    {
      type:PUT_SONGS_SUCCESS,
      payload:songData,
    }
  )

export const putSongsFailure = (payload) => (
    {
      type:PUT_SONGS_FAILURE,
      payload
    }
  )

  