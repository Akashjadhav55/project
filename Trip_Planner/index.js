const express = require("express")
const cors  = require("cors")
const axiosInstance = require("./lib/axios")
require("dotenv").config();
const { createItinerary, getItinerary } = require("./controllers/dataController")
const { getFlights, getHotels, getSites  } = require("./controllers/itineraryController");
const { sequelize } = require("./models");

const app = express()
app.use(express.json())

app.use(cors());


app.post("/itinerary", createItinerary);
app.get("/itinerary/:id", getItinerary);

app.get("/data/flights",getFlights)
app.get("/data/hotels", getHotels)
app.get("/data/sites",  getSites)

sequelize.authenticate().then( () => {
    console.log("datatbase connected")
}).catch(error  => {
    console.error("Unable to connect to database, error")
})

app.listen(3000, ()=> {
    console.log("server is running on port "+3000)
})