const express = require("express")
const app = express()
const  {cartItems} = require("./Products")
const cors = require("cors")

app.use(cors())


app.get("/", (req, res)=>{
    res.json(cartItems)
})


app.listen(5000)
