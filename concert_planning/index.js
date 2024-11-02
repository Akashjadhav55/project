
const axiosInstance = require("./lib/axios")
require("dotenv").config()

axiosInstance
    .get("/health")
    .then((res) => console.log(res.data))
    .catch((error) => console.log("Error fetch th axios health", error))


const getConcertsByArtistAndCity  = async (artist, city) => {
    try{
        const response = await axiosInstance.get("concerts/search",{
            params:{
                artist: artist,
                city: city
        }})
        return response.data
    }catch (error) {
        console.log(error)
    }
}

getConcertsByArtistAndCity("Taylor Swift", "Las Vegas").then((res) =>{
    console.log(res)
}).catch((error) => {
    console.log(error)
})