var mongoose = require('mongoose');
var Schema = mongoose.Schema; //Para esquematizar los modelos que vayamos a utilizar


var casaSchema = new Schema({
//Se tiene que definir el tipo de atributo
    direccion:{type:String},
    latitud:{type:Number},
    longitud:{type:Number},
    habitaciones: {type: String},
    precio: {type: Number},
    contrato: {type: String},
    arrendador: {type: Schema.ObjectId, ref: "Arrendador" , require: true}
});



//Convertir un modelo que esta en el cache de mongoose
module.exports = mongoose.model('Casa',casaSchema);
