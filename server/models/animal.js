const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
    name:{type:String,required:[true,"Name is required"]}
})//,{timestamps:true});

mongoose.model("Animal",AnimalSchema);//Use string when importing the mongoose.model() elsewhere