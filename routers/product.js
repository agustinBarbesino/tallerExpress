import { Router } from "express";
import {allProducts, productByBrand, productByType} from '../controllers/Product/read.js'
import { createProduct, createManyProducts } from '../controllers/Product/create.js'

const productRouter = Router()

productRouter.get('/all', allProducts)
productRouter.get('/brand/:brand', productByBrand)
productRouter.get('/type/:type', productByType)
productRouter.post('/create', createProduct)
productRouter.post('/createMany', createManyProducts)

export default productRouter