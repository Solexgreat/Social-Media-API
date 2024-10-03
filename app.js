const express = require ('express');
const bodyParser = require ('body-parse');
const dotenv = require ('dotenv')


const app = express();

dotenv.config() //load evn variable


//Middleware to parse incoming Json request
app.use(bodyParser.json())

//serve the routes
app.use('/api/user', userRoutes)