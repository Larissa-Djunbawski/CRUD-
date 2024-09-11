const db = require("../db.js")

const Schema = db.Schema

const motoSchema = new Schema({
    Marca:{
        type: String,
        require: true
    },
    Cor: {
        type: String,
        require: true

    },
    Modelo: {
        type: String,
        require: false
    },
    Cilindrada: {
        type: Number,
        require: false
    },
    Peso: {
        type: Number,
        require: false
    }
})

const Moto = db.model(" Moto", motoSchema)

module.exports = Moto