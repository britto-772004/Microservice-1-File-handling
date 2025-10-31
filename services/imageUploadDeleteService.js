const cloudinary = require("../config/cloudinary");
const fs = require("fs");

async function uploadToCloud(path){
    try{
        const result = await cloudinary.uploader.upload(path,{resource_type : "auto"});
        fs.unlinkSync(path);
        const output = {
            public_url : result.secure_url,
            public_id : result.public_id
        }
        return output;
    }
    catch(error){
        console.log("error in uploadToCloud : ",error);
        throw new Error("Failed to upload");
    }
}

async function deleteFileFromCloud(id){
    try{
        const result = await cloudinary.uploader.destroy(id,{invalidate: true});
        return result;
    }
    catch(error){
        console.log("error in delete the file : ",error);
        throw new Error("failed to delete file from the cloud ");
    }
}

module.exports = {uploadToCloud,deleteFileFromCloud};