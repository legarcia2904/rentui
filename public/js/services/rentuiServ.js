angular.module('servicios.rentui', [])
            .factory('Casa', Casa);

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