import axios from "axios";

const basUrl = "http://localhost:8080/api/login";

function login(credentials) {
  return axios.post(basUrl, credentials).then((res) => res.data);
}

export default { login };
