
const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();
router.use(express.json());

const ProductModel = require("../modules/product");
router.get("/list",async (req,res) => {
    const productList =  await ProductModel.find({},{name:true});
    if(productList.length == 0)
    {
         return res.json( {data :"Product not found" });
     }
     return res.json( {data :productList });
 });

 router.post("/addproduct", (req,res) =>  {
    const { newproduct } = req.body;
   // const addNewUser = userModel.create(newUser);
   ProductModel.create(newproduct);
   return res.json( {data :"Product added registered" });
  });

  router.delete("/deleteproduct/:pname",  (req,res) =>  {
    const pname = req.params.name;
    const deleteProduct =  ProductModel.findOneAndDelete(
        { name: pname,}
        );
        return res.json( {data :"Product deleted successfully" });
  });

  router.put("/updateproduct/:pname",async  (req,res) =>  {
    const pname = req.params.name;

    const updateProduct = await ProductModel.findOneAndUpdate(
        { name: pname,},
        {new : true}
        );
        return res.json( {data :"Product name updated succesfully done" });
  });
  module.exports = router;