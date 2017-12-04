angular.module('servicios.rentui', [])
    .factory('Casa', Casa)
    .factory('Arrendador', Arrendador);

function Casa($http) {
    var l = {
        casas : [],
        casas_ind : [],
        casas_edit : []
    };
    l.getCasas = function(){
        return $http.get('/casas')
            .then(function(res){
                console.log(res.data);
                angular.copy(res.data, l.casas);
            }, function(res){
                console.log(res.statusText);
            });
    };

    l.addCasa = function(nuevo){
        return $http.post('/casas', nuevo)
            .then(function (res) {
                l.casas.push(res.data);
            }, function (res) {
                console.log(res.statusText);
            });
    };
    l.findCasa = function(id){
        return $http.get('/casas/'+id)
            .then(function(res){
                console.log(res.data);
                angular.copy(res.data, l.casas_ind);
            }, function(res){
                console.log(res.statusText);
            });
    };
    l.showCasa = function(id){
        return $http.get('/casas/'+id)
            .then(function(res){
                console.log(res.data);
                angular.copy(res.data, l.casas_edit);
            }, function(res){
                console.log(res.statusText);
            });
    };

    l.updateCasa = function(actualizado){
        if(actualizado._id!==undefined){
            return $http.put('/casas/'+actualizado._id, actualizado)
                .then(function (res) {
                    angular.copy(res.data, l.casas);
                }, function (res) {
                    console.log(res.statusText);
                });
        }
    };
    l.deleteCasa = function(id){
        return $http.delete('/casas/'+id)
            .then(function (res) {
                angular.copy(res.data, l.casas);
            }, function (res) {
                console.log(res.statusText);
            });
    };
    return l;
};

//** Arrendador
function Arrendador($http) {
    var a = {
        arrendadores : [],
        arrendadores_ind : [],
        arrendadores_edit : []
    };
    a.getArrendadores = function(){
        return $http.get('/arrendadores')
            .then(function(res){
                console.log(res.data);
                angular.copy(res.data, a.arrendadores);
            }, function(res){
                console.log(res.statusText);
            });
    };

    a.addArrendador = function(nuevo){
        return $http.post('/arrendadores', nuevo)
            .then(function (res) {
                l.arrendadores.push(res.data);
            }, function (res) {
                console.log(res.statusText);
            });
    };
    a.findArrendador = function(id){
        return $http.get('/arrendadores/'+id)
            .then(function(res){
                console.log(res.data);
                angular.copy(res.data, a.arrendadores_ind);
            }, function(res){
                console.log(res.statusText);
            });
    };
    a.showArrendador = function(id){
        return $http.get('/arrendadores/'+id)
            .then(function(res){
                console.log(res.data);
                angular.copy(res.data, a.arrendadores_edit);
            }, function(res){
                console.log(res.statusText);
            });
    };

    a.updateArrendador = function(actualizado){
        if(actualizado._id!==undefined){
            return $http.put('/arrendadores/'+actualizado._id, actualizado)
                .then(function (res) {
                    angular.copy(res.data, a.arrendadores);
                }, function (res) {
                    console.log(res.statusText);
                });
        }
    };
    a.deleteArrendador = function(id){
        return $http.delete('/arrendadores/'+id)
            .then(function (res) {
                angular.copy(res.data, a.arrendadores);
            }, function (res) {
                console.log(res.statusText);
            });
    };
    return a;
};