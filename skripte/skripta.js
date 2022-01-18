$(document).ready(function(){
    $(".hamburger").click(function(){
        if($(this).attr("src") == "./images/icon-hamburger.svg"){
            $(".menu").css("display", "flex");
            $(this).attr("src", "./images/icon-close.svg");
            $("body").css("overflow", "hidden");
        }else{
            $(".menu").css("display", "none");
            $(this).attr("src", "./images/icon-hamburger.svg");
            $("body").css("overflow", "unset");
        }       
    });
});