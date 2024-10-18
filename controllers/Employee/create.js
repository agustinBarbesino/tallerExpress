import Employee from '../../models/Employee.js'

const createEmployee = async (req, res, next) => {
    try {
        await Employee.create(req.body)
        return res.status(201).json({ success: true })
    } catch (error) {
        next(error)
    }
}

const createManyEmployees = async (req, res, next) => {
    try {
        await Employee.insertMany(req.body.employees)
        return res.status(201).json({ response: true })
    } catch (error) {
        next(error)
    }
}

export { createEmployee, createManyEmployees }