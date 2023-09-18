require("dotenv").config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;
const db = process.env.DB_API
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(db);
 
  console.log('db connected')
}
const productSchema = new mongoose.Schema({
    username: String,
    password: String,
    id: String,
    name: String,
    company:String,
    price: Number,
    description:String ,
    category:String ,
    feature:String
  
  
});

const Product = mongoose.model('Product', productSchema);

const server = express();

server.use(cors());
server.use(bodyParser.json());

// CRUD - Create
server.post('/api',async (req,res)=>{
     
    let product = new Product();
    product.productname = req.body.productname;
   product.productname = req.body.productname;
    product.password = req.body.password;
    product.id = req.body.id;
    product.name= req.body.name;
    product.company= req.body.company;
    product.price= req.body.price;
    product.image= req.body.image;
    product.description= req.body.description;
    product.category= req.body.category;
    product.feature= req.body.feature;
  
    const doc = await product.save();

    console.log(doc);
    res.json(doc);
})

server.get('/api',async (req,res)=>{
 
    const docs = await Product.find(req.query);
    res.json(docs)
})

// const express = require('express');

// const server = express();

server.listen(port,()=>{
    console.log('server started with port no:')
    console.log(port)
})