import axios from 'axios'
axios.defaults.baseURL = 'https://pixabay.com/api/';

const key = "21467089-834cf4d43691d5a48650a74ae";
function getPhotos (query,page)
{
    return(
        axios.get(`?key=${key}&q=${query}&image_type=phot&per_page=21&page=${page}`) 
    )
}

export default getPhotos