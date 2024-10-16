import Employee from '../../models/Employee.js'

let allEmployees = async (req, res, next) => {
    try {
        let all = await Employee.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }     
}

let employeeByPosition = async (req, res, next) => {
    try {
        let positionQuery = req.params.position
        let all = await Employee.find({position : positionQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }     
}

let employeeBySalary = async (req, res, next) => {
    try {
        let salaryQuery = req.params.salary
        let all = await Employee.find({salary : salaryQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }     
}

export {allEmployees, employeeByPosition, employeeBySalary}
