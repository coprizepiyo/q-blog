/**
 * === 配置文件 ========================================================================= 
 * @version 0.0.1
 * @author CoprizePiyo (coprizepiyo@hotmail.com)
 * @description 项目相关配置
 * --- 2017.03.04 ----------------------------
 */
module.exports={
    port:8080,
    session:{
        secret: 'myblog',
        key: 'myblog',
        maxAge: 1000*60*30
    },
    mongodb:'mongodb://localhost:27017/myblog'
}