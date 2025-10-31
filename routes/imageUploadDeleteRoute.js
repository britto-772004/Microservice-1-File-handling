const express = require("express");
const {uploadFile,deleteFile} = require("../controller/imageUploadDeleteController");

const multer = require("multer");

const upload = multer({dest:"uploads/"});

const router = express.Router();

router.post("/uploadFile",upload.single("file") ,uploadFile);
router.delete("/deleteFile/:id",deleteFile);

module.exports = router;
