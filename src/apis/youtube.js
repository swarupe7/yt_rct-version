//AIzaSyDuj58JCDxnScxRizlcChqPjnY0Tgg2-5U



import axios from 'axios';
const KEY = 'AIzaSyDuj58JCDxnScxRizlcChqPjnY0Tgg2-5U'; 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})