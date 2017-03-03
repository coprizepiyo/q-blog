/**
 * === 路由模块 ========================================================================= 
 * @version 0.0.1
 * @author CoprizePiyo (coprizepiyo@hotmail.com)
 * @description 路由
 * --- 2017.03.03 ----------------------------
 */
module.exports=function(app){
    app.use(require('./login.js'));
    app.use(require('./register.js'));
    app.use(require('./demo.js'));
    app.use(require('./index.js'));
}