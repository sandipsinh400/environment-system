const { Schema, model } = require("mongoose");

const Envschema=new Schema({
    Protec_title:String,
    Description:String,
    Sub_title:String,
    Profile_img:String,
})

const EnvStore=model("envstore",Envschema)
module.exports=EnvStore