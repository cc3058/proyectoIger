const express = require('express');
const postRoutes = express.Router();

//circle model
let Post = require('../models/post-circle');

//route to save data
postRoutes.route('/add').post(function (req, res){
    let post = new Post(req.body);
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
    Post.find(function(err, circulos){
        if(err){
            res.json(err);
        }
        else {
            res.json(circulos);
        }
    });
});

postRoutes.route('/orientador').get(async function (req, res) {
    Post.find({
        encargado: await req.query.encargado
    }, async function(err, circulos){
        console.log("entre2")
        if(err){
            await res.json(err);
        } else {
            await res.json({dpto: circulos[0].departamento, mun: circulos[0].municipio, num: circulos[0].circulo, orientadores: circulos[0].orientador})
            //console.log(circulos[0].orientador)
            //res.json(circulos.orientador)
        }
    });
});




module.exports = postRoutes;