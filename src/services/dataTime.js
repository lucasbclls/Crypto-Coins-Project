import axios from "axios";

const dataTime = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/coins/bitcoin/history?date=28-03-2023',
})

export default dataTime; 
