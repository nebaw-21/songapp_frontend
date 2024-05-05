import axios from "axios";

const fetchSongs = () => axios.get("http://localhost:3000/api/song");

export default fetchSongs;