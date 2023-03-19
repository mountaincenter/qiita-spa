import axios from "axios"

const client = axios.create({
  baseURL: process.env.REACT_APP_NODE_ENV === "development" ? "http://localhost/api/v1" : "https://api.ymnk.fun/"
})

export default client