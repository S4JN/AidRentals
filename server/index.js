const express = require("express");
const testRoutes = require("./routes/testRoutes");
const authRoutes = require("./routes/authRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");
const morgan = require("morgan");
const cors = require("cors");
const app= express();
const connectDB = require("./config/db.js");
const mailRoutes=require("./routes/mailRoutes")
const getOwnerRoutes=require("./routes/getOwnerRoutes");
// const filesRoutes=require('./routes/fileRoutes');
//dotenv config
require("dotenv").config();


app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb', extended: true}));

//middlewares
// app.use(express.json())
app.use(cors());
app.use(morgan("dev"));



app.use("/api/v1/test",testRoutes);
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/inventory",inventoryRoutes);
app.use("/sendMail",mailRoutes);
app.use("/getOwner",getOwnerRoutes);
// app.use("/add",filesRoutes);
//made using mvc pattern 

const PORT = process.env.PORT || 8000;

//both the below methods are correct 

// connectDB();
// app.listen(PORT,()=>{
//     console.log(`Server runnng on Port ${PORT}`);
// })

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.error("Error connecting to the database:", error));


  // cloudinary api_key :992642159884851
  // cloud_name: dresaxcif
  // secret: 1V1_d_9Ta9fnmv2WuJdzcW4ONLM
  // API_env_variable: CLOUDINARY_URL=cloudinary://992642159884851:1V1_d_9Ta9fnmv2WuJdzcW4ONLM@dresaxcif