import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID 633cace019fa5b9f306cc60f32721222ae5eaf9b1acf51ac9fd7ece02a4365d7'

}
})