const mongoose=require('mongoose')



const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    userType:{
        type:String,
        required:true,
        default:"CUSTOMER",
        enum:["CUSTOMER","ADMIN"]
    },

},{
    versionKey:false,
    timestamps:true
}
)

module.exports=mongoose.model("User",userSchema)