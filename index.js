const express = require("express");
require("dotenv").config();
const fileapi = require("./routes/imageUploadDeleteRoute");

const app = express();

app.use(express.json());
// app.use(express.urlencoded)

app.use("/api",fileapi);

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`backend is running in http://localhost:${port}`);
})