const express = require("express");
const dotenv = require("dotenv");
const app = require("./routes/planRoutes.js");
const DBConnection = require("./db/config.js")

dotenv.config();

const port = process.env.PORT || 9000;

app.get('/check',(req,res)=>{
   res.send('api is working')
});


app.listen(port,async()=>{
    await DBConnection();
console.log(`Server is running at port ${port}`);
})