import { Router } from "express";
import {allProductos, productoPorMarca, productoPorTipo} from '../controllers/Producto/read.js'

const productoRouter = Router()

productoRouter.get('/all', allProductos)
productoRouter.get('/marca/:marca', productoPorMarca)
productoRouter.get('/tipo/:tipo', productoPorTipo)

export default productoRouter