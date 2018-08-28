import axios from "./axios";

export const getLeagues = async () => {
  try {
    const leagues = await axios.get("/leagues");
    return leagues;
  } catch (err) {
    console.log(err);
  }
};

export const getLeague = async id => {
  try {
    const league = await axios.get(`/leagues/${id}`);
    return league;
  } catch (err) {
    console.log(err);
  }
};
