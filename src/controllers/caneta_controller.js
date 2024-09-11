const Caneta = require("../models/caneta_model.js")

const store = (req,res) => {
    try {
        Caneta.create(req.body)
        res.json()
    } catch (err) {
        res.status(400).json(err)
    }

}

const index = (req,res) => {
    try {
        const content = Caneta.find().exec()
        res.json(content)
    } catch (err) {
        res.status(400).json(err)
    }

}

const show = (req,res) => {
    try {
        const content = Caneta.findById(req.params.id).exec()
        res.json(content)
    } catch (err) {
        res.status(400).json(err)
    }

}

const update = (req,res) => {
    try {
        Caneta.findByIdAndUpdate(req.params.id, req.body).exec()
        res.json()
    } catch(err) {
        res.status(400).json(err)
    }

}

const destroy = (req,res) => {
    try {
        Caneta.findByIdAndDelete(req.params.id).exec()
        res.json()
    } catch(err){
        res.status(400).json(err)
    }
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}