import { Router } from "express";
import tiendaRouter from './tienda.js'
import empleadoRouter from './empleado.js'
import productoRouter from './producto.js'

const indexRouter = Router()

indexRouter.use('/tienda', tiendaRouter)
indexRouter.use('/empleado', empleadoRouter)
indexRouter.use('/producto', productoRouter)

export default indexRouter