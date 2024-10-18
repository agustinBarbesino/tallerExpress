const validate_employee = (error, req, res, next) => {
    const { name, position, salary } = req.body
    if (!name || !position || !salary) {
        return res.status(400).json({ 
            response: error,
            success: false,
            message: "Todos los campos (name, position, salary) son requeridos para la creación."
         });
    }
    next()
}

export default validate_employee