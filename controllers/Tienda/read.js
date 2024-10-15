import Tienda from '../../models/Tienda.js'

let allTiendas = async (req, res) => {
    try {
        let all = await Tienda.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }     
}

let tiendaPorDireccion = async (req, res) => {
    try {
        direccionQuery = req.params.direccion
        let all = await Tienda.find({direccion : direccionQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }     
}

let tiendaPorNombre = async (req, res) => {
    try {
        nombreQuery = req.params.nombre
        let all = await Tienda.find({nombre : nombreQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }     
}

export {allTiendas, tiendaPorDireccion, tiendaPorNombre} 