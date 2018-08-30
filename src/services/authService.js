import axios from "./axios";

export const signUp = async data => {
  try {
    const token = await axios.post("/auth/register", data);
    return token;
  } catch (err) {
    console.log(err);
  }
};

export const login = async data => {
  try {
    const token = await axios.post("/auth/login", data);
    return token;
  } catch (err) {
    console.log(err);
  }
};
