import { Router } from "express";
import { allEmpleados, empleadoPorSalario, empleadoPorCargo } from "../controllers/Empleado/read.js";
import { createEmpleado, createManyEmpleados } from "../controllers/Empleado/create.js";

const empleadoRouter = Router()

empleadoRouter.get('/all', allEmpleados)
empleadoRouter.get('/cargo/:cargo', empleadoPorCargo)
empleadoRouter.get('/salario/:salario', empleadoPorSalario)
empleadoRouter.post('/create', createEmpleado)
empleadoRouter.post('/createMany', createManyEmpleados)

export default empleadoRouter