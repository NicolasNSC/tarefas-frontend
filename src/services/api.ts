import axios from "axios";

const api = axios.create({
  baseURL: "https://tasks-backend-by-nicolasnsc.herokuapp.com",
});

export default api;
