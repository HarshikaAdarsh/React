import axios from 'axios';


const searchImages = async (term) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
     headers:{
        Authorization:'Client-ID oZh7mX4tgEq_7HrnAV1IIPAhyEW2v6JeJlJWp3_fjjk',
     },
     params: {
         query: term,
     },
    });
    
    
    return response.data.results;
};

export default searchImages;