import Tienda from '../../models/Tienda.js'

const createTienda = async (req, res) => {
    try {
        await Tienda.create(req.body)
        return res.status(201).json({ success: true })
    } catch (error) {
        return res.status(500).json({ response: error })
    }
}

const createManyTiendas = async (req, res) => {
    try {
        await Tienda.insertMany(req.body.tiendas)
        return res.status(201).json({ response: true })
    } catch (error) {
        return res.status(500).json({ response: error })
    }
}

export { createTienda, createManyTiendas }