import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:3090/api",
});
export default axios;
