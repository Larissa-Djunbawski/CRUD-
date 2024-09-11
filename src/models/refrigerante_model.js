const db = require("../db.js")

const Schema = db.Schema

const refrigeranteSchema = new Schema({
    porcentagem_suco:{
        type: String,
        require: true
    },
    kcal200ml: {
        type: Boolean,
        require: false

    },
    sabor: {
        type: String,
        require: true
    },
    tamanhoMl:{
        type: String,
        require: true
    }
})

const Refrigerante = db.model("Refrigerante", refrigeranteSchema)

module.exports = Refrigerante