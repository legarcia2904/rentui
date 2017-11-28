var mongoose = require('mongoose');
var Schema = mongoose.Schema; //Para esquematizar los modelos que vayamos a utilizar


var arrendadorSchema = new Schema({
//Se tiene que definir el tipo de atributo
	nombre:{type:String},
	apellidos: {type:String},
	telefono: {type:String},
	correo: {type : String},
	casas:{type: Schema.ObjectId, ref: "Casa" , require: true}
	//Schema.ObjectId
});

module.exports = mongoose.model('Arrendador',arrendadorSchema);
