const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    path = require("path"),
    PORT=8090;
//Body Parser
app.use(bodyParser.urlencoded({extended:true}));
//USING ANGULAR

//USING EXPRESS
    //Static
    app.use(express.static(path.join(__dirname,'./client/static')))

    //Views
    app.set('views',path.join(__dirname,"./client/views"));
    app.set('view engine','ejs');

//Mongoose
var mongoose = require('./server/config/mongoose.js');

//Routes
const route_setter = require('./server/config/routes.js');
route_setter(app)

//Listener
app.listen(PORT,function(){
    console.log(`listen at ${PORT}`);
})