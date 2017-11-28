var mongoose = require('mongoose');
var Casa = mongoose.model('Casa');
var Arrendador = mongoose.model('Arrendador');

//FUNCION QUE PERMITE AGREGAR CASAS NUEVAS
exports.addCasas = function(req,res,next){
	console.log('POST /casas');
	var casa = new Casa({
		direccion : req.body.direccion,
		latitud : req.body.latitud,
		longitud : req.body.longitud,
		habitaciones : req.body.habitaciones,
		precio : req.body.precio,
		contrato : req.body.contrato,
		arrendador : req.body.arrendador
	});

	casa.save(function(err,casa){
		if(err) return res.send(500,err.message);
		res.status(200).jsonp(casa);
	});

};

//FUNCION QUE REGRESA TODAS LAS CASAS
exports.getCasas=function(req,res,next){
	console.log('GET /casas');

	Casa.find(req.query,function(err,casas){
		if(err){
			res.send(500,err.message);
		}
		else{
			console.log('GET /casas');
			Arrendador.populate(casas,{path: "arrendador"},function(err,casas){
			res.status(200).send(casas);
			
		});
	   }
	});

};
 

//FUNCION QUE ACTUALIZA LA INFORMACION DE UNA CASA ESPECIFICADO EN EL ID
exports.updateCasa = function(req,res,next){
	console.log('PUT /casas/:id');
	console.log(req.params.id);
	console.log(req.body);

Casa.update({_id: req.params.id},{$set:{direccion:req.body.direccion,habitaciones:req.body.habitaciones,
			 precio: req.body.precio,contrato:req.body.contrato}},function(err, casas){
		if(err){
  			res.send(500, err.message);
  			console.log('error');
  		}else{
  			console.log('bien');
		Casa.find({_id: req.params.id},function(err,casas){
  		if(err){
  			res.send(500, err.message);
  		}else{
  			console.log('GET/casas');
  			Arrendador.populate(casas,{path: "arrendador"},function(err,casas){
			res.status(200).send(casas);
		     });
	    }
	});

  		}

	});

};


//FUNCION QUE ELIMINA UNA CASA
exports.deleteCasa= function(req,res,next){
	console.log('DELETE /casas/:id');
	console.log(req.params.id);

	Casa.remove({_id: req.params.id},function(err,casas){
		if(err){
			res.send(500,err.message);
		}else{
			res.status(200).jsonp("Se borro exitosamente");
			console.log("Se borro exitosamente");
  		}
  	});		
};


//FUNCION PARA AGREGAR UN NUEVO ARRENDADOR
exports.addArrendador=function(req,res,next){
console.log('POST /arrendadores');
	var arrendador = new Arrendador({
		nombre : req.body.nombre,
		apellidos: req.body.apellidos,
		telefono : req.body.telefono,
		correo : req.body.correo
		
	}); 
	arrendador.save(function(err,casa){
		if(err) return res.send(500,err.message);
		res.status(200).jsonp(arrendador);
	});
}

//FUNCION QUE REGRESA LOS ARRENDADORES DE TODAS LAS CASAS
exports.getArrendadores = function(req,res,next){
	console.log('GET /arrendadores');

	Arrendador.find(function(err,casas){
		if(err){
			res.send(500,err.message);
		}
		else{
			console.log('GET /arrendadores');
			res.status(200).jsonp(casas);

		}
	});
}; 


//FUNCION QUE REGRESA LAS CASAS DEL ARRENDADOR QUE SE ENVIO
exports.getByArrendador = function(req,res,next){
	console.log('GET /arrendadores/:id/casas');
    console.log('ID:'+req.params.id);
    var c=0;
	Arrendador.findById({_id: req.params.id},function(err,arrendadores){
  		if(err){
  			res.send(500, err.message);
  		}else{
  			Casa.find({arrendador:req.params.id},function(err,casa){
  				if(err){
  					res.send(500,err.message);
  				}else{
  					Arrendador.arrendadores=casa;
  					c++;
  					console.log(casa);
  					return res.status(200).jsonp(casa);	
  					
  				}
  					
  			});
	   }
	});
		
};


//FUNCION QUE ACTUALIZA EL NOMBRE DEL AUTOR QUE SE ENVIO
exports.updateArrendador= function(req,res,next){
	console.log('PUT /arrendadores/:nombre');
	console.log(req.body);
	console.log(req.params.nombre);

Arrendador.update({_id: req.params.nombre},{$set:{nombre:req.body.nombre,apellidos:req.body.apellidos}},function(err, casas){
		if(err){
  			res.send(500, err.message);
  			console.log('error');
  		}else{
  			console.log('bien');
	Arrendador.find({_id: req.params.nombre},function(err,casas){
  		if(err){
  			res.send(500, err.message);
  		}else{
  			Arrendador.populate(casas,{path: "arrendador"},function(err,casas){
			res.status(200).send(casas);
		     });
	    }
	});

  		}

	});
};

//FUNCION QUE ELIMINA LOS LIBROS DE UN AUTOR ESPECIFICADO
exports.deleteArrendador = function(req,res,next){
	console.log('DELETE /arrendadores/:id');
	console.log(req.params.id);

	Arrendador.find({_id: req.params.id},function(err,casas){
		if(err){
			res.send(500,err.message);
		}else{
			console.log(req.params.id);
			Casa.remove({arrendador: req.params.id},function(err,casas){
  				if(err){
  					res.send(500, err.message);
  				}else{
  					Arrendador.remove({_id: req.params.id},function(err,casas){
  						if(err){
  							res.send(500,err.message);
  						}else{
  							res.status(200).jsonp(casas);
  						}
  					});
  				}		
  			});
		}
	});
};



