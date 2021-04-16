import axios from 'axios'

const axiosConfig = axios.create({
  baseURL: 'https://ranobelib-0b05.restdb.io/rest',
  headers: {
    "x-apikey": "60795f8728bf9b609975a2b1"
  },
})

export default axiosConfig