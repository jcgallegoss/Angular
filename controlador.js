var app = angular.module('GeekSoft',[]);
app.controller('Empleados',['$scope','$http',function(s,http){
	s.nombre="hola";
	http.get('Trabajadores.json').success(function(data){
		s.empleado=data;
	});
}]);