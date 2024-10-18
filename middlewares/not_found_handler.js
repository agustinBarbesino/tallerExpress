const not_found_handler = (req, res, next) => {
    return res.status(404).json({
        succcess: false,
        message: `ruta no encontrada - Not Found - Petición con metodo ${req.method} y ruta ${req.url}`
    })
}

export default not_found_handler