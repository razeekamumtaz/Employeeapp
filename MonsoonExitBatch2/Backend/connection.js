const mongoose = require("mongoose");
//Write missing code 
mongoose.connect("mongodb+srv://razeekamumtaz5828:razee2001@cluster0.ezznqnu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
