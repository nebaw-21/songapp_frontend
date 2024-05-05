import axios from "axios";

const deleteSpecificSongs = (songId) => axios.delete(`http://localhost:3000/api/song/${songId}`);

export default deleteSpecificSongs;