import axios from 'axios'

//create instance and to this endpoint we will paste dynamic
const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
})

export default instance
// you can only have one default export