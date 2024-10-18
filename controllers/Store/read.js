import Store from '../../models/Store.js'

let allStores = async (req, res, next) => {
    try {
        let all = await Store.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }     
}

let storeByAddress = async (req, res, next) => {
    try {
        let addressQuery = req.params.address
        let all = await Store.find({address : addressQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }     
}

let storeByName = async (req, res, next) => {
    try {
        let nameQuery = req.params.name
        let all = await Store.find({name : nameQuery})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }     
}

export {allStores, storeByAddress, storeByName} 