const express = require("express")

const router = express.Router()

const caneta_controller = require("../controllers/caneta_controller")

router.post("/",caneta_controller.store)
router.get("/",caneta_controller.index)
router.get("/",caneta_controller.show)
router.put("/:id",caneta_controller.update)
router.delete("/;id",caneta_controller.destroy)

module.exports = router
