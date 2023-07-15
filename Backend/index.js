const express=require("express");
const app=express();
const intersectionRouter=require("./routes/intersection");
const port=8080;

// Routes
app.use("/intersection", intersectionRouter);

app.listen(port,()=>console.log("Application Started"));
