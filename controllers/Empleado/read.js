import Empleado from '../../models/Empleado.js'

let allEmpleados = async (req, res) => {
    try {
        let all = await Empleado.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }     
}

let empleadoPorCargo = async (req, res) => {
    try {
        cargoQuery = req.params.cargo
        let all = await Empleado.find({cargo : cargoQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }     
}

let empleadoPorSalario = async (req, res) => {
    try {
        salarioQuery = req.params.salario
        let all = await Empleado.find({salario : salarioQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }     
}

export {allEmpleados, empleadoPorCargo, empleadoPorSalario}
