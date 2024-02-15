const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/test',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("connection etablie");
    }).catch((error) => {
        console.log("somthing wrong", error);
    })