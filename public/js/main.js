angular.module('rentuiApp',['ngRoute','controladores.rentui', 'ngMap']).config(configurar);

function configurar($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl:'/templates/main.html'
        })
        .when('/casas', {
            templateUrl:'/templates/casas.html',
            controller:'CasaController',
            resolve:{
                casasPromise: ['Casa', function (Casa) {
                    Casa.getCasas();
                }],
                arrendadoresPromise: ['Arrendador', function (Arrendador) {
                    Arrendador.getArrendadores();
                }]
            }
        })
        .when('/arrendadores', {
            templateUrl:'/templates/arrendadores.html',
            controller:'ArrendadorController',
            resolve:{
                arrendadoresPromise: ['Arrendador', function (Arrendador) {
                    Arrendador.getArrendadores();
                }]
            }
        })
        .otherwise({redirectTo:'/'
        });
}