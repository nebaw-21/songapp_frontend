import axios from "axios";

const postUserRequest = async (userData) => {
  try {
    const response = await axios.post("http://localhost:3000/api/user/login", userData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      throw new Error(error.response.data.error);
    }
    throw error;
  }
};

export default postUserRequest;
