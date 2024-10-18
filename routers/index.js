import { Router } from "express";
import storeRouter from './store.js'
import employeeRouter from './employee.js'
import productRouter from './product.js'

const indexRouter = Router()

indexRouter.use('/stores', storeRouter)
indexRouter.use('/employees', employeeRouter)
indexRouter.use('/products', productRouter)

export default indexRouter