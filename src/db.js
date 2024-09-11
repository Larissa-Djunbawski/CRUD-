const mongoose = require("mongoose")

const mongoDB = "mongo://localhost:27017/crud"

async function main() {
    await mongoose.connect(mongoDB)
}

main()
.then(() => console.log("conexão realizada com sucesso"))
.catch(err => console.log(err))

module.exports = mongoose