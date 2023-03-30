import axios from "axios";

const dataTime = axios.create({
    baseURL: `https://api.coingecko.com/api/v3/coins/bitcoin/history?date=30-03-2022`,
})

export default dataTime; 
