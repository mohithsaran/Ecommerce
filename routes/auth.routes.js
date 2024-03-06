/**

 * POST localhost:8888/ecomm/api/v1/auth/signup
 * 
 * I need to intercept this
 */
const authController = require("../controllers/auth.controller")
const authMW = require("../middlewares/auth.mw")


module.exports = (app)=>{
    app.post("/ecom/api/auth/signup",[authMW.verifySignUpBody], authController.signup)

// route for post call signin
app.post("/ecom/api/auth/signin",authController.signin)
}