const category_model = require("../models/category.model")

/**
 * Controller for creating the category
 * 
 *   POST localhost:8080/ecom/api/categories
 * 
 *   {
       "name" : "Household",
        "description" : "This will have all the household items "
     }
 */
exports.createNewCategory = async (req, res)=>{

    //Read the req body
    //Create the category object
    const cat_data = {
        name : req.body.name,
        description : req.body.description
    }
    try{
       //Insert into mongodb
       const category = await category_model.create(cat_data)
       return res.status(201).send(category)
    }catch(err){
        console.log("Error while creating the category", err)
        return res.status(500).send({
            message : "Error while creating the category"
        })
    }
    

    //return the response of the created category
}

exports.readCategory=async(req,res)=>{
    const req_body=req.body
    const cat_read=await category_model.find()
    try{
        res.status(200).send(cat_read)
    }
    catch(err){
        res.status(500).send({
            message:"Cannot find Categories"
        })
    }

}

exports.readCategoryById=async(req,res)=>{
    const {id}=req.params
    try{
        const cat_id=await category_model.findById(id)
        res.status(200).send(cat_id)

    }
    catch(err){
        res.status(500).send({
            message:"Cannot find by this Id"
        })
    }
}


exports.updateCategoryById=async(req,res)=>{
    const {id}=req.params
    try{
        const cat_up=await category_model.findByIdAndUpdate(id)
        res.status(200).json(cat_up)
    }
    catch(err){
        res.status(500).send({
            message:"Cannot update the id, please check the id"
        })
    }

}

exports.deleteCategoryById=async(req,res)=>{
    const {id}=req.params
    try{
        const cat_del=await category_model.findByIdAndDelete(id)
        res.status(200).send({
            message:`Deleted the category By Id: ${id}`
        })

    }
    catch(err){
        res.status(500).send({
            message:"Cannot delete this category. Please check the Id of the category"
        })

    }
}