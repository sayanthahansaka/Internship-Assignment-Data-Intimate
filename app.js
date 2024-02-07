const express = require("express");
const app = express();

app.get("/api", (req,res) =>{
     res.json({
        success:1,
        massage: "This is resy apis working"
     });
});

app.listen(3000, () => {
    console.log("Server up and running");
});