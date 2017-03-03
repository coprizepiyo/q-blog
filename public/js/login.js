window.onload=function(){
    var elLogin=document.getElementById('login'),
        shieldingLayer=document.getElementById('shielding-layer');

    function elLoginClick(){
        
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