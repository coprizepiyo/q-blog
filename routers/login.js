/**
 * === 登录模块 ========================================================================= 
 * @version 0.0.1
 * @author CoprizePiyo (coprizepiyo@hotmail.com)
 * @description 提供登录相关的功能
 * --- 2017.03.03 ----------------------------
 */
var express=require('express');
    router=express.Router();

router.get('/',function(req,res){
    res.render('login');
});

router.get('/login',function(req,res){
    res.render('login');
});

//登录
router.post('/login',function(req,res){
    res.send('post login');
})

module.exports=router;