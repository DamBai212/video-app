import axios from 'axios';
const KEY = 'AIzaSyDENLZKFuCP7CfOH4o7ZWgU-hgqLwSj7t0'

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})