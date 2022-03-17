const express = require("express");

const app = express();

const dbconfig = require('./db');
const roomsRoute = require('./routes/roomsRoute');
app.use('/api/rooms', roomsRoute); //localhost:5000/api/rooms

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is working started nodemon ${port}`));

// mongodb + srv://user:<password>@cluster0.y4ugr.mongodb.net/test