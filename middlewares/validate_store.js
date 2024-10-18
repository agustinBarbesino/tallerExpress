const validate_store = (error, req, res, next) => {
    const { name, address, phone } = req.body
    if (!name || !address || !phone) {
        return res.status(400).json({ 
            response: error,
            success: false,
            message: "Todos los campos (name, address, phone) son requeridos para la creación."
         });
    }
    next()
}

export default validate_store