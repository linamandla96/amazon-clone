import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-app-3ecbe.cloudfunctions.net/api" //The API (Cloud function URL)
});

export default instance;
