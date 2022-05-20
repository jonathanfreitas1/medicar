import axios from 'axios'


const http = axios.create({
    baseURL: 'http://localhost:3000',
})

/* const token = "Token " + localStorage.getItem('token')

if (token) {
    http.defaults.headers.authorization = token
    console.log(token)
} */

export default http;