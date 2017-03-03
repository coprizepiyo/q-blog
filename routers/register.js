/**
 * === 登录模块 ========================================================================= 
 * @version 0.0.1
 * @author CoprizePiyo (coprizepiyo@hotmail.com)
 * @description 提供注册相关的功能
 * --- 2017.03.03 ----------------------------
 */
var express=require('express');
    router=express.Router();

router.get('/register',function(req,res){
    res.render('register');
});

//注册
router.post('/register',function(req,res){
    res.send('post register');
})

module.exports=router;