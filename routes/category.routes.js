/**
 * POST localhost:8080/ecom/api/categories
 */


const category_controller = require("../controllers/category.controller")
const auth_mw = require("../middlewares/auth.mw")

module.exports = (app)=>{
    app.post("/ecom/api/categories",[auth_mw.verifyToken, auth_mw.isAdmin],category_controller.createNewCategory)
    app.get("/ecom/api/allcategories",[auth_mw.verifyToken, auth_mw.isAdmin],category_controller.readCategory)
    app.get("/ecom/api/categoryById/:id",[auth_mw.verifyToken, auth_mw.isAdmin],category_controller.readCategoryById)
    app.put("/ecom/api/updatecategoryById/:id",[auth_mw.verifyToken, auth_mw.isAdmin],category_controller.updateCategoryById)
    app.delete("/ecom/api/delcategoryById/:id",[auth_mw.verifyToken, auth_mw.isAdmin],category_controller.deleteCategoryById)

}
