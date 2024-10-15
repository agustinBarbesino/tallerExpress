import "dotenv/config.js"
import "../../config/database.js"
import Empleado from '../Empleado.js'

const empleados = [
    { nombre: "Juan Pérez", cargo: "Desarrollador", salario: 45000 },
    { nombre: "Ana Gómez", cargo: "Diseñadora", salario: 40000 },
    { nombre: "Carlos Ramírez", cargo: "Gerente de Proyectos", salario: 60000 },
    { nombre: "Marta Sánchez", cargo: "Analista de Datos", salario: 50000 },
    { nombre: "Luis Torres", cargo: "Soporte Técnico", salario: 35000 },
    { nombre: "Clara Ruiz", cargo: "Especialista en Marketing", salario: 42000 },
    { nombre: "Pedro Molina", cargo: "Contador", salario: 38000 },
    { nombre: "Sofía López", cargo: "Recursos Humanos", salario: 41000 },
    { nombre: "Andrés Herrera", cargo: "Desarrollador", salario: 46000 },
    { nombre: "Valeria Díaz", cargo: "Diseñadora", salario: 43000 },
    { nombre: "Miguel Castro", cargo: "Ingeniero de Redes", salario: 52000 },
    { nombre: "Lorena Vargas", cargo: "Consultora de Negocios", salario: 55000 },
    { nombre: "Javier Núñez", cargo: "Administrador de Sistemas", salario: 49000 },
    { nombre: "Paula Flores", cargo: "Especialista en Ventas", salario: 39000 },
    { nombre: "Roberto León", cargo: "Arquitecto de Software", salario: 65000 }
  ];

Empleado.insertMany(empleados)