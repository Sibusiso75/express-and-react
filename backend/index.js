const express = require("express")
const app = express()
const  {cartItems} = require("./Products")
const cors = require("cors")

app.use(cors())


app.get("https://ecommerce-products-9qke.onrender.com", (req, res)=>{
    res.json(cartItems)
})


app.listen(5000 || "https://ecommerce-products-9qke.onrender.com")
