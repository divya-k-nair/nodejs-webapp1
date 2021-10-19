var express=require('express')
var app=express()
app.get('/by',(req,res)=>{
    res.send("Have a nice day")
})
app.get('/for',(req,res)=>{
    res.send("hellooo")
})
app.get('/do',(req,res)=>{
    res.send("do good things")
})
app.listen(3000,(req,res)=>{
    console.log("server started at")
})