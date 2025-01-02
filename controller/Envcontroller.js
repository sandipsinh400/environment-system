const EnvStore = require("../model/Envmodel");

const creat=async(req,res)=>{
    console.log("store api...");
    // console.log(req.body);
    const {Protec_title, Description,Sub_title} = req.body;
    await EnvStore.create({Protec_title, Description,Sub_title,Profile_img:req.file.filename})

    res.json({
        success:true,
        message:"data inserted"
    })
}
const view=async (req,res)=>{
    // res.send("api get")
   const enve = await EnvStore.find();
    res.json({
        success:true,
        enve
        
    })
}

const trash = async (req,res)=>{
    const {id}=req.params;
    console.log(id);
    await EnvStore.findByIdAndDelete(id)
    res.json({
        success:true,
        message:"data has been deleted"
    })
}

const update=async (req,res)=>{
    const {id}=req.params;
    const { Protec_title, Description ,Sub_title}=req.body
    await EnvStore.findByIdAndUpdate(
        {_id:id},
        {Protec_title, Description ,Sub_title}
    )
    res.json({
        success:true,
        message:"record updated"
    })
}


module.exports={creat,view,trash,update}