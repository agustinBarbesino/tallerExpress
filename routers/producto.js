import { Router } from "express";
import {allProductos, productoPorMarca, productoPorTipo} from '../controllers/Producto/read.js'
import { createProducto, createManyProductos } from '../controllers/Producto/create.js'

const productoRouter = Router()

productoRouter.get('/all', allProductos)
productoRouter.get('/marca/:marca', productoPorMarca)
productoRouter.get('/tipo/:tipo', productoPorTipo)
productoRouter.post('/create', createProducto)
productoRouter.post('/createMany', createManyProductos)

export default productoRouter