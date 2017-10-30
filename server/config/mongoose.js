const mongoose = require("mongoose"),
    fs = require('fs'),//loading model files
    path = require('path'),//model paths
    DBNAME = 'mongeese';

mongoose.connect(`mongodb://localhost/${DBNAME}`)

const models_path=path.join(__dirname,'./../models');//import models

fs.readdirSync(models_path).forEach(function(file){
    if (file.indexOf('.js') >= 0) {
        require(models_path +'/'+file);//for loop through schema's models and registers them into project
    }
})
