import axios from "axios"

const client = axios.create({
  baseURL: "http://localhost:80/api/v1"
})

export default client