
const {uploadToCloud,deleteFileFromCloud} = require("../services/imageUploadDeleteService");

const uploadFile = async (req,res)=>{
    try{
        if(!req.file){
            return res.status(400).json({success:false,message : "no file received"});
        }
        console.log("file : ",req.file);
        const result = await uploadToCloud(req.file.path);
        return res.status(200).json({success : true,message : "successfully uploaded",data : result});

    }
    catch(error){
        console.log("error : ",error);
        return res.status(500).json({success : false,error : error});
    }
}

const deleteFile = async (req,res)=>{
    const {id} = req.params;
    try{
        if(!id){
            res.status(400).json({success: false,message : "id is missing"});
        }
        const result = await deleteFileFromCloud(id);
        if(result.result === "ok"){
            return res.status(200).json({success : true,message : "successfully deleted"})
        }
        else{
            return res.status(404).json({success : false,message : "file not found in cloud"})
        }
        

    }
    catch(error){
        console.log("error : ",error);
        return res.status(500).json({success : false,error : error});
    }
}

module.exports = {uploadFile,deleteFile};