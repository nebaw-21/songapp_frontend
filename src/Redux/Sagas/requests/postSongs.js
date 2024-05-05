import axios from "axios";

const postSongs = (songData) => axios.post("http://localhost:3000/api/song", songData);

export default postSongs;