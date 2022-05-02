const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    return res.json({
        name:"Karen",
        mail:"karen@gmail.com"
    })
})



app.listen(4000,()=>{
    console.log("corriendo en");
})