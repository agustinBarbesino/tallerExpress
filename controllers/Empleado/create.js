import Empleado from '../../models/Empleado.js'

const createEmpleado = async (req, res) => {
    try {
        await Empleado.create(req.body)
        return res.status(201).json({ success: true })
    } catch (error) {
        return res.status(500).json({ response: error })
    }
}

const createManyEmpleados = async (req, res) => {
    try {
        await Empleado.insertMany(req.body.empleados)
        return res.status(201).json({ response: true })
    } catch (error) {
        return res.status(500).json({ response: error })
    }
}

export { createEmpleado, createManyEmpleados }