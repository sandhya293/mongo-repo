require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json());

const port = 5000

mongoose
  .connect(process.env.MONGOURL)
  .then(() => console.log("mongo db connected"));

  const companyroute = require('./routes/company');
  const productroute = require('./routes/product');
  const sellerroute = require('./routes/seller');
  

app.get('/', (req, res) => res.send('PRODUCT MANAGEMENT!'))

app.use("/company",companyroute);
app.use("/product",productroute);
app.use("/seller",sellerroute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

