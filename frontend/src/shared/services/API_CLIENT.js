import axios from "axios";

export const API_CLIENT = {
  get(URL, data) {
    // console.log("get ka URL", URL);
    return axios.get(URL, { timeout: 7000 });
  },
  post(URL, data) {
    // console.log("This is URL ", URL, " this is data ", data);
    return axios.post(URL, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  update(URL, data) {
    return axios.put(URL, data);
  },
  delete(URL, payload) {
    return axios.delete(URL, { data: payload });
  },
};