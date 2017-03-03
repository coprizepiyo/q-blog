/**
 * === 前台登录模块 ========================================================================= 
 * @version 0.0.1
 * @author CoprizePiyo (coprizepiyo@hotmail.com)
 * @description 提供登录相关的功能
 * --- 2017.03.03 ----------------------------
 */
window.onload=function(){
    var elLogin=document.getElementById('login'),
        shieldingLayer=document.getElementById('shielding-layer');

    function elLoginClick(){
        shieldingLayer.style.display='block';
    }

    function elLoginMD(){
        addClass(elLogin,'login-md');
    }

    function elLoginMU(){
        removeClass(elLogin,'login-md');
    }

    function addClass(el,value){
        el.className=el.className+' '+value;
    }

    function removeClass(el,value){
       el.className = el.className.replace(value,'');
    }

    elLogin.addEventListener('click',elLoginClick);
    elLogin.addEventListener('mousedown',elLoginMD);
    elLogin.addEventListener('mouseup',elLoginMU);
    shieldingLayer.addEventListener('click',function(){
        this.style.display='none';
    });
}