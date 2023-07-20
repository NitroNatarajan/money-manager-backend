const express = require("express");
const dbConnect = require("./dbConnect");
const app = express();
app.use(express.json())
const path = require("path");
const userRoute = require("./Routes/userRoutes")
const transactionRoute = require("./Routes/transactionRoutes")
// Router Mounting
app.use("/api/users",userRoute)
app.use("/api/transaction", transactionRoute)


const port = process.env.PORT || 5000
if(process.env.NODE_ENV === "production"){
    app.use("/",express.static("frontend/build"))
    app.get("*", (req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend/build/index.html'))
    })
}

app.listen(port, (req,res)=>{
    console.log(`App listening at the port : ${port}`)
})
