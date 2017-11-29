var express = require('express');
var router = express.Router();

var multer = require('multer');
var upload = multer();

var modelos = require('../models/Casa'); //Para que se creen los modelos
var modeloArrendador = require('../models/Arrendador' );

var Ctrl = require('../controllers/RentaController');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Casas en Renta' });
});

router.route('/casas')
    .get(Ctrl.getCasas) //Devuelve todas las casas
    .post(upload.array(),Ctrl.addCasas); //Crea una nueva casa


router.route('/casas/:id')
    .get(Ctrl.getCasaById) //Devuelve la casa con el ID indicado.
    .put(upload.array(),Ctrl.updateCasa)  //Actualiza la casa con el ID indicado.
    .delete(Ctrl.deleteCasa); //Elimina la casa con el ID indicado.


router.route('/arrendadores')
    .get(Ctrl.getArrendadores)//devolver todos los arrendadores
    .post(upload.array(),Ctrl.addArrendador); //Crea un nuevo arrendador

router.route('/arrendadores/:nombre')
    .put(upload.array(),Ctrl.updateArrendador);  //Actualiza un arrendador dado su nombre

router.route('/arrendadores/:id/casas')
    .get(Ctrl.getByArrendador);  //Devuelve las casas de un arrendador dado su ID

router.route('/arrendadores/:id')
    .get(Ctrl.getArrendadorDadoId) //Devuelve el arrendador con el ID indicado.
    .put(upload.array(),Ctrl.updateArrendadorDadoId)  //Actualiza el arrendador con el ID indicado.
    .delete(Ctrl.deleteArrendador);  //Elimina un arrendador dado su ID

module.exports = router;


