import cloudinary from "cloudinary";
import app from "./index.js";
import mongoose from "mongoose";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

app.get('/',(req,res)=>{
  if(mongoose.connection.readyState === 1){
      res.status(200).json([{
          "status": "success",
          "code": 200,
          "message": 'Job seeking website',
          "database": "Connected to MongoDb"
      }])
  }
  else{
      res.status(200).json([{
          "status": "success",
          "code": 200,
          "message": 'Job seeking website',
          "database": "Not connected to MongoDb"
      }])
  }
  
})

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});

export default app;