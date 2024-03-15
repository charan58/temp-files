const exp=require('express')
const path=require('path')
const rootDir=require('./utils/path')
const app=exp();
const bodyParser=require('body-parser')
const Router=require('./routes/admin')
const router=require('./routes/shop')
app.use(exp.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({extended:false}))// parses the response
app.use('/admin',Router);
app.use(router)
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})
app.listen(3000,()=>{
    console.log("server listening on port 3000")
})