import { Router } from "express";
import tiendaRouter from './tienda.js'
import empleadoRouter from './empleado.js'
import productoRouter from './producto.js'

const indexRouter = Router()

indexRouter.use('/tiendas', tiendaRouter)
indexRouter.use('/empleados', empleadoRouter)
indexRouter.use('/productos', productoRouter)

export default indexRouter