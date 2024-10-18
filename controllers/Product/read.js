import Product from '../../models/Product.js'

let allProducts = async (req, res, next) => {
    try {
        let all = await Product.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }     
}

let productByBrand = async (req, res, next) => {
    try {
        let brandQuery = req.params.brand
        let all = await Product.find({brand : brandQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }     
}

let productByType = async (req, res, next) => {
    try {
        let typeQuery = req.params.type
        let all = await Product.find({type : typeQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }     
}

export {allProducts, productByBrand, productByType}