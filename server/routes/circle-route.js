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
        if(err){
            await res.json(err);
        } else {
            var allresults = []
            for(row in circulos)
            {
                var fetchoneresult = await {dpto: circulos[row].departamento, mun: circulos[row].municipio, num: circulos[row].circulo, orientadores: circulos[row].orientador}
                allresults.push(fetchoneresult)
            }
            res.json(allresults)

        }
    });
});

postRoutes.route('/coordinador').get(async function (req, res) {
    Post.find({
        coordinador: await req.query.coordinador
    }, async function(err, circulos){
        if(err){
            await res.json(err);
        } else {
            var allresults = []
            for(row in circulos)
            {
                var fetchoneresult = await {dpto: circulos[row].departamento, mun: circulos[row].municipio, num: circulos[row].circulo}
                allresults.push(fetchoneresult)
            }
            res.json(allresults)
            console.log(allresults)
        }
    });
});






module.exports = postRoutes;