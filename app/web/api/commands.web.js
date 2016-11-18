import express from "express"
import {} from "../../services/commands"

let router = express.Router()

router.get("/", (req, res) => {
  res.status(501)
  .send("Not Implemented")
})

router.get("/:orderId", (req, res) => {
  res.status(501)
  .send("Not Implemented")
})

router.put("/:orderId", (req, res) => {
  res.status(501)
  .send("Not Implemented")
})

router.put("/:orderId/products/:productsId", (req, res) => {
  res.status(501)
  .send("Not Implemented")
})

router.post("/:orderId/payment", (req, res) => {
  res.status(501)
  .send("Not Implemented")
})

export default router
