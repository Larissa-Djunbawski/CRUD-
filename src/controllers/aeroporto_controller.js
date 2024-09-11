const Aeroporto = require("../models/aeroporto_model.js")

const store = (req,res) => {
    try {
        Aeroporto.create(req.body)
        res.json()
    } catch {
        res.status(400).json(err)
    }

}

const index = (req,res) => {
    try {
        const content = Aeroporto.find().exec()
        res.json(content)
    } catch {
        res.status(400).json(err)
    }

}

const show = (req,res) => {
    try {
        const content = Aeroporto.findById(req.params.id).exec()
        res.json(content)
    } catch {
        res.status(400).json(err)
    }

}

const update = (req,res) => {
    try {
        Aeroporto.findByIdAndUpdate(req.params.id, req.body).exec()
        res.json()
    } catch {
        res.status(400).json(err)
    }

}

const destroy = (req,res) => {
    try {
        Aeroporto.findByIdAndDelete(req.params.id).exec()
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