import axios from "axios";

const movieDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "8d4dd667ea5057819cdaa9ffdd2d7c2a",
    language: "es-ES",
  },
});

export default movieDB;
