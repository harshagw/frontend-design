$(document).ready(function(){

    $(window).scroll(function () {
       if ($(this).scrollTop() > 50) {
          $(".header").addClass("header--colorchange")
       }
       if ($(this).scrollTop() < 50) {
          $(".header").removeClass("header--colorchange")
       }
    });

    // $(".search__arrow.left").click(function() { 
    //   if(!$(this).hasClass("disable")){
    //     $(".sidebar").addClass("hide"); 
    //     $(this).addClass("disable");
    //     $(".search__arrow.right").removeClass("disable"); 
    //   }
    // });

    // $(".search__arrow.right").click(function() {  //use a class, since your ID gets mangled
    //   if(!$(this).hasClass("disable")){
    //     $(".sidebar").removeClass("hide"); 
    //     $(this).addClass("disable");
    //     $(".search__arrow.left").removeClass("disable"); 
    //   }     
    // });

    $(".sidebar").click(function() {
        $(this).toggleClass("hide");
        $('.main').toggleClass("squeeze");
    });    

});