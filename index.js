var btn1 = document.getElementById("ham-btn-main");
var btn2 = document.getElementById("ham-btn-menu");
var menu = document.getElementById("mobile-menu");
var image = document.getElementById("ham-img");

menu.style.display = "none";
btn1.onclick = function(){
    if(menu.style.display == "none"){
        menu.style.display = "inline-block";
        image.src = "images/icon-close.svg";
    }
    else{
        menu.style.display = "none";
    }
    
};
btn2.onclick = function(){
    if(menu.style.display == "none"){
        menu.style.display = "inline-block";
        image.src = "images/icon-close.svg";
    }
    else{
        menu.style.display = "none";
    }
    
};
