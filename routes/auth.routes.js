/**

 * POST localhost:8080/ecomm/api/auth/signup
 * 
 * 
 */
const authController = require("../controllers/auth.controller")
const authMW = require("../middlewares/auth.mw")


module.exports = (app)=>{
    app.post("/ecom/api/auth/signup",[authMW.verifySignUpBody], authController.signup)

// route for post call signin
app.post("/ecom/api/auth/signin",[authMW.verifySignInBody],authController.signin)
}