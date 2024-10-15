import { Router } from "express";
import { allEmpleados, empleadoPorSalario, empleadoPorCargo } from "../controllers/Empleado/read.js";

const empleadoRouter = Router()

empleadoRouter.get('/all', allEmpleados)
empleadoRouter.get('/cargo/:cargo', empleadoPorCargo)
empleadoRouter.get('/salario/:salario', empleadoPorSalario)

export default empleadoRouter