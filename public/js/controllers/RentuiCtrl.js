angular.module('controladores.rentui', ['servicios.rentui']).controller('RentaController', RentaController);

function RentaController($scope, Casa){
  $scope.titulo = 'Rentui';

  $scope.casa = {};
  Casa.getCasas();
  $scope.casas = Casa.casas;
  $scope.casas_ind = {};
  $scope.casas_edit = {};

  $scope.addCasa = function () {
      Casa.addCasa($scope.casa);
      $scope.casa = {};
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
  };
  $scope.deleteCasa = function(id){
        Casa.deleteCasa(id);
        $scope.casa = {};
  };
};