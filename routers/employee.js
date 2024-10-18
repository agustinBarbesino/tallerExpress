import { Router } from "express";
import { allEmployees, employeeBySalary, employeeByPosition } from "../controllers/Employee/read.js";
import { createEmployee, createManyEmployees } from "../controllers/Employee/create.js";

const employeeRouter = Router()

employeeRouter.get('/all', allEmployees)
employeeRouter.get('/position/:position', employeeByPosition)
employeeRouter.get('/salary/:salary', employeeBySalary)
employeeRouter.post('/create', createEmployee)
employeeRouter.post('/createMany', createManyEmployees)

export default employeeRouter