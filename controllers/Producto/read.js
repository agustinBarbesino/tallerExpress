import Producto from '../../models/Producto.js'

let allProductos = async (req, res) => {
    try {
        let all = await Producto.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }     
}

let productoPorMarca = async (req, res) => {
    try {
        let marcaQuery = req.params.marca
        let all = await Producto.find({marca : marcaQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }     
}

let productoPorTipo = async (req, res) => {
    try {
        let tipoQuery = req.params.tipo
        let all = await Producto.find({tipo : tipoQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }     
}

export {allProductos, productoPorMarca, productoPorTipo}