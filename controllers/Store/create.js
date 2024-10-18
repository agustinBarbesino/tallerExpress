import Store from '../../models/Store.js'

const createStore = async (req, res, next) => {
    try {
        await Store.create(req.body)
        return res.status(201).json({ success: true })
    } catch (error) {
        next(error)
    }
}

const createManyStores = async (req, res, next) => {
    try {
        await Store.insertMany(req.body.stores)
        return res.status(201).json({ response: true })
    } catch (error) {
        next(error)
    }
}

export { createStore, createManyStores }