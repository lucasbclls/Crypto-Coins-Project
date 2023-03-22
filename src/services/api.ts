import axios from "axios";

const api = axios.create({
    baseURL:"https://pokeapi.co/api/vs/",
})

export default api; 