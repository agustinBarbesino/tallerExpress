import { Router } from "express";
import {allTiendas, tiendaPorNombre, tiendaPorDireccion} from '../controllers/Tienda/read.js'

const tiendaRouter = Router()

tiendaRouter.get('/all', allTiendas)
tiendaRouter.get('/nombre/:nombre', tiendaPorNombre)
tiendaRouter.get('/direccion/:direccion', tiendaPorDireccion)

export default tiendaRouter
