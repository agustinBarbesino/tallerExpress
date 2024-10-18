const validate_product = (error, req, res, next) => {
    const { name, brand, type, price } = req.body
    if (!name || !brand || !type || !price) {
        return res.status(400).json({ 
            response: error,
            success: false,
            message: "Todos los campos (name, brand, type, price) son requeridos para la creación."
         });
    }
    next()
}

export default validate_product