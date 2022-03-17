const mongoose = require('mongoose');
var mongoURL = "mongodb+srv://milind:milind@cluster0.0tsoc.mongodb.net/MernRooms?retryWrites=true&w=majority";
mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });
var connection = mongoose.connection;
connection.on('error', () => {
    console.log("mongo eror");
})
connection.on('connected', () => {
    console.log("mongo connection");
})

module.exports = mongoose;