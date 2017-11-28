var express = require('express');
var router = express.Router();

var multer = require('multer');
var upload = multer();

var modelos = require('../models/Casa'); //Para que se creen los modelos
var modeloArrendador = require('../models/Arrendador' );

var Ctrl = require('../controllers/RentaController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rentui' });
});

router.route('/casas')
		.get(Ctrl.getCasas)
		.post(upload.array(),Ctrl.addCasas);


router.route('/casas/:id')
		.put(upload.array(),Ctrl.updateCasa) 
		.delete(Ctrl.deleteCasa);


router.route('/arrendadores')
		.get(Ctrl.getArrendadores)//devolver todos los arrendadores
		.post(upload.array(),Ctrl.addArrendador);

 router.route('/arrendadores/:nombre')
		.put(upload.array(),Ctrl.updateArrendador); 

router.route('/arrendadores/:id/casas')
		.get(Ctrl.getByArrendador);

router.route('/arrendadores/:id')
		.delete(Ctrl.deleteArrendador); 

		module.exports = router; 


