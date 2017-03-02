/**
 * === 主模块 ========================================================================= 
 * @version 0.0.1
 * @author CoprizePiyo (coprizepiyo@hotmail.com)
 * @description 应用程序入口
 * --- 2017.03.03 ----------------------------
 */
var express=require('express'),
    app=express(),
    path=require('path');

//设置静态目录
app.use(express.static(path.join(__dirname,'public')));

//设置视图引擎
app.set('views',path.join(__dirname,'public/views'));
app.set('view engine','html');
app.engine('html',require('ejs').renderFile);

//引入路由
require('./routers/router.js')(app);

//监听8080端口
app.listen(8080,function(){
    console.log('server is running on port 8080');
});