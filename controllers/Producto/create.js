import Producto from '../../models/Producto.js'

const createProducto = async (req, res) => {
    try {
        await Producto.create(req.body)
        return res.status(201).json({ success: true })
    } catch (error) {
        return res.status(500).json({ response: error })
    }
}

const createManyProductos = async (req, res) => {
    try {
        await Producto.insertMany(req.body.productos)
        return res.status(201).json({ response: true })
    } catch (error) {
        return res.status(500).json({ response: error })
    }
}

export { createProducto, createManyProductos }