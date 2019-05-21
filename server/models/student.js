const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Defining collection and schema for a circle-post
let StudentSchema = new Schema({
    departamento:{
        type: String
    },
    municipio:{
        type: String
    },
    circulo:{
        type: String
    },
    nombre:{
        type: String
    },
    },{
        collection: 'estudiantes'
});

module.exports = mongoose.model('Student', StudentSchema)
