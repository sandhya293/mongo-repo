const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();
router.use(express.json());

const SellerModel = require("../modules/seller");

router.get("/list",async (req,res) => {
    const sellerList =  await SellerModel.find({},{name:true});
    if(sellerList.length == 0)
    {
         return res.json( {data :"user not found" });
     }
     return res.json( {data :sellerList });
 });

 router.post("/addseller", (req,res) =>  {
    const { newseller } = req.body;
   // const addNewUser = userModel.create(newUser);
   SellerModel.create(newseller);
   return res.json( {data :"seller added registered" });
  });

  router.delete("/deleteseller/:sname",  (req,res) =>  {
    const sname = req.params.name;
    const deleteSeller =  SellerModel.findOneAndDelete(
        { name: sname,}
        );
        return res.json( {data :"seller deleted successfully" });
  });

  router.put("/updateseller/:sname",async  (req,res) =>  {
    const sname = req.params.name;

    const updateSeller = await SellerModel.findOneAndUpdate(
        { name: sname,},
        {new : true}
        );
        return res.json( {data :"seller name updated succesfully done" });
  });
  module.exports = router;