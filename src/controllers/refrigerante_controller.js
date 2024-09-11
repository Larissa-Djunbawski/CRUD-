const Refrigerante = require("../models/refrigerante_model.js")

const store = (req,res) => {
    Refrigerante.create(req.body)
    res.json()
}

const index = (req,res) => {
    const content = Refrigerante.find().exec()
    res.json(content)
}

const show = (req,res) => {
    const content = Refrigerante.findById(req.params.id).exec()
    res.json(content)
}

const update = (req,res) => {
    Refrigerante.findByIdAndUpdate(req.params.id, req.body).exec()
    res.json()
}

const destroy = (req,res) => {
    Refrigerante.findByIdAndDelete(req.params.id).exec()
    res.json()
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}