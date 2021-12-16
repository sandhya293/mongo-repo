const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();
router.use(express.json());

const CompanyModel = require("../modules/company");
router.get("/list",async (req,res) => {
    const companyList =  await CompanyModel.find({},{name:true});
    if(companyList.length == 0)
    {
         return res.json( {data :"user not found" });
     }
     return res.json( {data :companyList });
 });

 router.post("/addCompany", (req,res) =>  {
    const { newCompany } = req.body;
   // const addNewUser = userModel.create(newUser);
   CompanyModel.create(newCompany);
   return res.json( {data :"Company added registered" });
  });

  router.delete("/deletecompany/:cname",  (req,res) =>  {
    const cname = req.params.name;
   // const deleteUser =  userModel.findOneAndDelete(
    const deleteUser =  CompanyModel.findOneAndDelete(
        { name: cname,}
        );
        return res.json( {data :"company deleted successfully" });
  });

  router.put("/updatecompany/:cname",async  (req,res) =>  {
    const cname = req.params.name;

    const updateUser = await CompanyModel.findOneAndUpdate(
        { name: cname,},
        {new : true}
        );
        return res.json( {data :"company name updated succesfully done" });
  });

  module.exports = router;