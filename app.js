require("dotenv").config();
const express = require("express");
const app = express();

app.get("/api", (req,res) =>{
     res.json({
        success:1,
        massage: "This is resy apis working"
     });
});

app.listen(process.env.APP_PORT, () => {
    console.log("Server up and running on port : ", process.env.APP_PORT);
});
