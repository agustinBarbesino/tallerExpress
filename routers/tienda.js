import { Router } from "express";
import {allTiendas, tiendaPorNombre, tiendaPorDireccion} from '../controllers/Tienda/read.js'
import { createTienda, createManyTiendas } from '../controllers/Tienda/create.js'

const tiendaRouter = Router()

tiendaRouter.get('/all', allTiendas)
tiendaRouter.get('/nombre/:nombre', tiendaPorNombre)
tiendaRouter.get('/direccion/:direccion', tiendaPorDireccion)
tiendaRouter.post('/create', createTienda)
tiendaRouter.post('/createMany', createManyTiendas)

export default tiendaRouter
