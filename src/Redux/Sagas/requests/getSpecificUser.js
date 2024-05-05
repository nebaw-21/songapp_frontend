// fetchSpecificSongs.js
import axios from "axios";

const fetchSpecificUser = (token) => {
  return axios.get("http://localhost:3000/api/user/getUser", {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
};

export default fetchSpecificUser;
