import axios from "axios";
const KEY = "AIzaSyB3RT854pKnimj_zHZfzJTSDQ1w0Es0zPk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  },
  headers: {}
});