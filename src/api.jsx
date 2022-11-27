import axios from "axios";

const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/`,
})

export default{
    now_Playing:(keyword) =>
    instance({
        method: `GET`,
        url: `${keyword}?api_key=3f691c544cd7ef3bb90dc283d358eb37&language=en-US&page=1`,
    }),

    get_Details:(ids) =>
    instance({
        method: `GET`,
        url: `${ids}?api_key=3f691c544cd7ef3bb90dc283d358eb37&language=en-US`,
    }),
}