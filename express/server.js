const express = require('express')
const products = require('./data')
const isAhth=require("./middlewares/isAuth")
const app = express()

app.use(express.json())

// get all products
app.get("/", (req, res) => {
    const filtPrice = req.query.price || 0
    res.send(products.filter(el => el.price > filtPrice))
})


//getOne product by id
app.get("/:id", (req, res) => {
    //console.log(products.find(el => el.id === req.params.id))
    res.json(products.find(el => el.id === req.params.id))
})

//delete One product
app.delete("/:id",isAhth, (req, res) => {
    res.json({ msg: "product successfuly deleted", products: products.filter(el => el.id != req.params.id) })
})


//add product
app.post("/",isAhth, (req, res) => {
    res.send({ products: [...products, { ...req.body, id: products.length + 1 }] })
})

//update products
app.put("/:id",isAhth,(req,res)=>{
    res.send(products.map(el=>el.id==req.params.id?  {...el,...req.body}:el))
})

const port = 5000
app.listen(port, () => console.log(` app listening on port ${port}!`))