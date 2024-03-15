const exp=require('express')
const app=exp();
const middleware1=(req,res,next)=>{
    console.log("/ middleware")
    next();
}
const middleware2=(req,res,next)=>{
    console.log("/users middleware")
    res.send('<p>response is received</p>')
}
app.use('/',middleware1);
app.use('/users',middleware2)
app.listen(3000,()=>{
    console.log("Server runs on port number 3000...")
})