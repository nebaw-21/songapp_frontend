import axios from "axios";

const registerUser = (userData) => axios.post("http://localhost:3000/api/user/register", userData);

export default registerUser;