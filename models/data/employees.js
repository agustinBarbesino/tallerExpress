import "dotenv/config.js"
import "../../config/database.js"
import Employee from '../Employee.js'

const employees = [
  { name: "Juan Pérez", position: "Developer", salary: 45000 },
  { name: "Ana Gómez", position: "Designer", salary: 40000 },
  { name: "Carlos Ramírez", position: "Project Manager", salary: 60000 },
  { name: "Marta Sánchez", position: "Data Analyst", salary: 50000 },
  { name: "Luis Torres", position: "Technical Support", salary: 35000 },
  { name: "Clara Ruiz", position: "Marketing Specialist", salary: 42000 },
  { name: "Pedro Molina", position: "Accountant", salary: 38000 },
  { name: "Sofía López", position: "Human Resources", salary: 41000 },
  { name: "Andrés Herrera", position: "Developer", salary: 46000 },
  { name: "Valeria Díaz", position: "Designer", salary: 43000 },
  { name: "Miguel Castro", position: "Network Engineer", salary: 52000 },
  { name: "Lorena Vargas", position: "Business Consultant", salary: 55000 },
  { name: "Javier Núñez", position: "System Administrator", salary: 49000 },
  { name: "Paula Flores", position: "Sales Specialist", salary: 39000 },
  { name: "Roberto León", position: "Software Architect", salary: 65000 }
];

Employee.insertMany(employees)