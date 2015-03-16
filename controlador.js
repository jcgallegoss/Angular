var app = angular.module('GeekSoft',[]);
app.controller('Empleados',['$scope',function(s){
	s.empleados=[
	{
		"nombre": "Jose Carlos",
		"apellido": "Gallegos",
		"puesto": "Desarrollador",
		"sueldo":	12000
	},
	{
		"nombre": "Javier",
		"apellido": "Martinez",
		"puesto": "Desarrollador",
		"sueldo":	10000
	},
	{
		"nombre": "Ana",
		"apellido": "Madrid",
		"puesto": "Analista",
		"sueldo":	11500
	},
	{
		"nombre": "Jazmin",
		"apellido": "Hernandez",
		"puesto": "Lider de Proyecto",
		"sueldo":	130000
	},
	{
		"nombre": "Ponchito",
		"apellido": "Herrera",
		"puesto": "Analista",
		"sueldo":	150000
	},
	{
		"nombre": "Chico",
		"apellido": "Rocket",
		"puesto": "Desarrollador",
		"sueldo":	120000
	}
];
	s.empleado={};
	s.ordenarColumna='';
	s.reversa = true;
	s.banderaEditar=true;
	s.i=0;
	s.NuevoEmpleado=function()
	{
		
		s.empleados.push(s.empleado);
		s.empleado={};
	}
	s.EliminarEmpleado=function(obj)
	{
		var i = s.empleados.indexOf(obj);
         s.empleados.splice(i, 1);
	}
	s.PreEditarEmpleado=function(obj)
	{
		s.banderaEditar=false;
		s.i = s.empleados.indexOf(obj);
		s.empleado.nombre   = obj.nombre;
		s.empleado.apellido = obj.apellido;
		s.empleado.puesto   = obj.puesto;
		s.empleado.sueldo   = obj.sueldo;

	}

	s.EditarEmpleado=function()
	{
		s.empleados[s.i].nombre=s.empleado.nombre;
		s.empleados[s.i].apellido=s.empleado.apellido;
		s.empleados[s.i].puesto=s.empleado.puesto;
		s.empleados[s.i].sueldo=s.empleado.sueldo;
		s.banderaEditar=true;
	}
}]);