const exp=require('express')
const path=require('path')
const rootDir=require('../utils/path')
const router=exp.Router();
router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'))
})
module.exports=router;