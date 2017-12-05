angular.module('controladores.rentui', ['servicios.rentui'])
    .controller('CasaController', CasaController)
    .controller('ArrendadorController', ArrendadorController);

function CasaController($scope, Casa, Arrendador){
    $scope.titulo = 'Casas en Renta';

    $scope.casa = {};
    $scope.arrendador = {};
    Casa.getCasas();
    $scope.casas = Casa.casas;
    $scope.arrendadores = Arrendador.arrendadores;
    $scope.casas_ind = {};
    $scope.casas_edit = {};

    $scope.addCasa = function () {
        Casa.addCasa($scope.casa);
        $scope.casa = {};
	    Casa.getCasas();
    };
    $scope.showCasa = function (id) {
        Casa.casas_edit={};
        $scope.casa = {};
        Casa.showCasa(id);
        $scope.casa = Casa.casas_edit;
    };
    $scope.getCasas = function(){
        Casa.getCasas();
        $scope.casas = Casa.casas;
    };
    $scope.findCasa = function(id){
        Casa.casas_ind={};
        $scope.casa = {};
        Casa.findCasa(id);
        $scope.casa = Casa.casas_ind;
    };
    $scope.updateCasa = function(casa){
        Casa.updateCasa(casa);
        $scope.casa = {};
	    Casa.getCasas();
    };
    $scope.deleteCasa = function(id){
        Casa.deleteCasa(id);
        $scope.casa = {};
        Casa.getCasas();
    };

    $scope.testCtrl = function(event){
        $scope.latlng = [-25.363882,131.044922];
        $scope.getpos = function(event){
            $scope.latlng = [event.latLng.lat(), event.latLng.lng()];
        };
    };

    // angular.module('myapp', ['ngMap']).run(function($rootScope) {
    //     $rootScope.$on('mapInitialized', function(evt,map) {
    //         $rootScope.map = map;
    //         $rootScope.$apply();
    //     });
    // })
    //     .controller('testCtrl', ['$scope', function testCtrl($scope) {
    //         $scope.latlng = [-25.363882,131.044922];
    //         $scope.getpos = function(event){
    //             $scope.latlng = [event.latLng.lat(), event.latLng.lng()];
    //         };
    //
    //     }]);
};

function ArrendadorController($scope, Arrendador){
    $scope.titulo = 'Arrendadores';

    $scope.arrendador = {};
    $scope.arrendadores = Arrendador.arrendadores;
    $scope.arrendadores_ind = {};
    $scope.arrendadores_edit = {};

    $scope.addArrendador = function () {
        Arrendador.addArrendador($scope.arrendador);
        $scope.arrendador = {};
        Arrendador.getArrendadores();
    };
    $scope.showArrendador = function (id) {
        Arrendador.arrendadores_edit={};
        $scope.arrendador = {};
        Arrendador.showArrendador(id);
        $scope.arrendador = Arrendador.arrendadores_edit;
    };
    $scope.getArrendadores = function(){
        Arrendador.getArrendadores();
        $scope.arrendadores = Arrendador.arrendadores;
    };
    $scope.findArrendador = function(id){
        Arrendador.arrendadores_ind={};
        $scope.arrendador = {};
        Arrendador.findArrendador(id);
        $scope.arrendador = Arrendador.arrendadores_ind;
    };
    $scope.updateArrendador = function(arrendador){
        Arrendador.updateArrendador(arrendador);
        $scope.arrendador = {};
        Arrendador.getArrendadores();
    };
    $scope.deleteArrendador = function(id){
        Arrendador.deleteArrendador(id);
        $scope.arrendador = {};
        Arrendador.getArrendadores();
    };
};