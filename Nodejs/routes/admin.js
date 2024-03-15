const exp=require('express')
const path=require('path')
const Router=exp.Router();
Router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
})
Router.post('/add-product',(req,res,next)=>{
    // res.send('<h1>Product has been added(post worked)</h1>');
    console.log(req.body);
    res.redirect('/');
})
module.exports=Router;