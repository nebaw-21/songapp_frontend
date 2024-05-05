import axios from "axios";
const putSong = (songData, songId) => {

  return axios.put(`http://localhost:3000/api/song/${songId}`, songData);
};


export default putSong;
