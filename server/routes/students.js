const express = require('express');
const postRoutes = express.Router();

//circle model
let StudentSchema = require('../models/student');

//route to save data
postRoutes.route('/add').post(function (req, res){
    let post = new StudentSchema(req.body);
    post.save()
        .then(() => {
            res.status(200).json({'business': 'business in added successfully'});
        })
        .catch(() =>{
            res.status(400).send("Failed to save");
        });    
    
});

//route to get data
postRoutes.route('/').get(function (req, res){
    StudentSchema.find(function(err, estudiantes){
        if(err){
            res.json(err);
        }
        else {
            res.json(estudiantes);
        }
    });
});



module.exports = postRoutes;