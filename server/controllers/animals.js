const mongoose = require('mongoose'),
    Animal = mongoose.model("Animal");
//Controller exported for requiring in the routes
module.exports = {
    index:(req,res)=>{
        Animal.find({},(err,animals)=>{
            res.render('index',{animals:animals});
        })
    },
    show:(req,res)=>{
        Animal.findOne({_id:req.params.id},(err,animal)=>{
            if(err){
                console.log("Mongoose not found");
                return res.redirect('/')
            }
            res.render("viewAnimal",{animal:animal})
        })
    },
    new:(req,res)=>{//GET view new form
        res.render('newAnimal');
    },
    create:(req,res)=>{//POST
        console.log("POST DATA:",req.body)
        var animal = new Animal(req.body);
        animal.save((err,newAnimal)=>{
            if(err){
                console.log("something went wrong, not saved")
                //rendering here, should redirect and save errors in sessions, though
                return res.render('newAnimal',{errors:animal.errors})
            }
            console.log("Added!")
            res.redirect(`/mongooses/${newAnimal._id}`);
        })
    },
    edit:(req,res)=>{//GET view update page
        Animal.findOne({ _id: req.params.id }, (err, animal) => {
            if (err) {
                console.log("Mongoose not found");
                return res.redirect('/')
            }
            res.render("editAnimal", { animal: animal })
        })
    },
    update:(req,res)=>{//PUT-similar to post, except for update
        console.log("POST DATA:", req.body)
        var animal = new Animal(req.body);//only for errors
        Animal.update({_id:req.params.id},{name:req.body.name},(err,saved)=>{
            if(err) return res.render('editAnimal',{errors:animal.errors})
            console.log("Updated!",saved);
            res.redirect(`/mongooses/${newAnimal._id}`);
        })
    },
    destroy:(req,res)=>{
        Animal.findOneAndRemove({ _id: req.params.id},(err)=>{
            (err) ? console.log("NOT DELETED") : console.log("DELETED");
            res.redirect('/');
        })
    }
}