import axios from "axios";

export const api = axios.create({
    baseURL: "https://sky-frontend.herokuapp.com/"
});

export const ApiMovies = () => api.get("movies");