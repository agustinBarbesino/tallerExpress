import "dotenv/config.js"
import "./config/database.js"
import cors from 'cors'
import morgan from 'morgan'
import indexRouter from './routers/index.js'
import express from "express"
import not_found_handler from "./middlewares/not_found_handler.js"
import error_handler from "./middlewares/error_handler.js"
import validate_employee from "./middlewares/validate_employee.js"
import validate_product from "./middlewares/validate_product.js"
import validate_store from "./middlewares/validate_store.js"


const server = express()
const PORT = process.env.PORT || 8081
const ready = () => console.log("server ready in port: " + PORT)
server.listen(PORT, ready)
console.log(process.env)

server.use(express.json()) //permite trabajar con formato .json en entrada y salida
server.use(express.urlencoded({ extended: true })) 
server.use(cors()) //permite el uso de cors
server.use(morgan('dev'))

server.use('/api', indexRouter) //Router
server.use(not_found_handler) //middleware de control de error 404
server.use(error_handler) //middleware de control de error 500
server.use(validate_employee) //middleware de validacion de datos de empleado
server.use(validate_product) //middleware de validacion de datos de producto
server.use(validate_store) //middleware de validacion de datos de tienda

