const db = require("../db.js")

const Schema = db.Schema

const aeroportoSchema = new Schema({
    nome:{
        type: String,
        require: true
    },
    endereco: {

    }
})

const Aeroporto = db.model("Aeroporto", aeroportoSchema)

module.exports = Aeroporto