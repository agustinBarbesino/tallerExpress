import { Router } from "express";
import {allStores, storeByName, storeByAddress} from '../controllers/Store/read.js'
import { createStore, createManyStores } from '../controllers/Store/create.js'

const storeRouter = Router()

storeRouter.get('/all', allStores)
storeRouter.get('/name/:name', storeByName)
storeRouter.get('/address/:address', storeByAddress)
storeRouter.post('/create', createStore)
storeRouter.post('/createMany', createManyStores)

export default storeRouter
