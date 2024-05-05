import axios from "axios";

const fetchSpecificSongs = (songId) => axios.get(`http://localhost:3000/api/song/${songId}`);

export default fetchSpecificSongs;