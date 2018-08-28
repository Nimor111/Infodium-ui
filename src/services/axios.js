import axios from "axios";

const baseURL = "http://localhost:8000/";

export const setAuthMiddleware = axios => {
  axios.interceptors.request.use(req => {
    const token = localStorage.getItem("auth-token");
    req.headers["x-auth"] = token;
    return req;
  });

  return axios;
};

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json"
  }
});

export default setAuthMiddleware(api);
