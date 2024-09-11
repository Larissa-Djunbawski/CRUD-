const Moto = require("../models/moto_model.js")

const store = (req,res) => {
    try {
        Moto.create(req.body)
        res.json()
    } catch (err) {
        res.status(400).json(err)
    }

}

const index = (req,res) => {
    try {
        const content = Moto.find().exec()
        res.json(content)
    } catch (err) {
        res.status(400).json(err)
    }

}

const show = (req,res) => {
    try {
        const content = Moto.findById(req.params.id).exec()
        res.json(content)
    } catch (err) {
        res.status(400).json(err)
    }

}

const update = (req,res) => {
    try {
        Moto.findByIdAndUpdate(req.params.id, req.body).exec()
        res.json()
    } catch {
        res.status(400).json(err)
    }

}

const destroy = (req,res) => {
    try {
        Moto.findByIdAndDelete(req.params.id).exec()
        res.json()
    } catch {
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