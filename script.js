$(function(){
    $(".searchone").click(function(){
      $(".searchone").css("border-color","orange")();  
    });
  
  });
  $(function(){
    $(".menunav").click(function(){
      $(".menu-navbar").animate({right: '0px'});  
    });
    $(".carousel").click(function(){
      $(".menu-navbar").animate({right: '-450px'});  
    });
  });

  $(function(){
    $(".close ").click(function(){
      $(".menu-navbar").animate({right: '-450px'});  
    });
  
  });

  $(function(){
    $(".salam").click(function(){ 
      $(".login").toggle(); 
     
    });
    $(".carousel").click(function(){ 
      $(".login").hide(); 
     
    });
  
  });
// --------------------------------

  $(function(){
    // $("body").click(function(){
    //   $(".footer-input").css("border-color","gray")();  
    // });
    $(".footer-input").click(function(){
      $(".footer-input").css("border-color","orange")();  
    });
  
  });
  // ------------------------
  $(function(){
    $(".card1").mouseenter(function(){ 
      $(".sect6-hoverdiv1").css({"transform":"translateX(0px)","transition":".7s","opacity":"1"})(); 
     
    });
    $(".card1").mouseleave(function(){ 
      $(".sect6-hoverdiv1").css({"transform":"translateX(100px)","transition":".7s","opacity":"0"})(); 
     
    });
  
  });
  $(function(){
    $(".card2").mouseenter(function(){ 
      $(".sect6-hoverdiv2").css({"transform":"translateX(0px)","transition":".7s","opacity":"1"})(); 
     
    });
    $(".card2").mouseleave(function(){ 
      $(".sect6-hoverdiv2").css({"transform":"translateX(100px)","transition":".7s","opacity":"0"})(); 
     
    });
  
  });
  $(function(){
    $(".card3").mouseenter(function(){ 
      $(".sect6-hoverdiv3").css({"transform":"translateX(0px)","transition":".7s","opacity":"1"})(); 
     
    });
    $(".card3").mouseleave(function(){ 
      $(".sect6-hoverdiv3").css({"transform":"translateX(100px)","transition":".7s","opacity":"0"})(); 
     
    });
  
  });


  // -------------------------------
  $(function(){
    $(".cardhov1").mouseenter(function(){ 
      $(".social-card1").css({"transform":"translateY(20px)","transition":".5s","opacity":"1"})(); 
     
    });
    $(".cardhov1").mouseleave(function(){ 
      $(".social-card1").css({"transform":"translateY(80px)","transition":".5s","opacity":"0"})(); 
     
    });
  
  });
  $(function(){
    $(".cardhov2").mouseenter(function(){ 
      $(".social-card2").css({"transform":"translateY(20px)","transition":".5s","opacity":"1"})(); 
     
    });
    $(".cardhov2").mouseleave(function(){ 
      $(".social-card2").css({"transform":"translateY(80px)","transition":".5s","opacity":"0"})(); 
     
    });
  
  });
  $(function(){
    $(".cardhov").mouseenter(function(){ 
      $(".social-card1").css({"transform":"translateY(20px)","transition":".5s","opacity":"1"})(); 
     
    });
    $(".cardhov").mouseleave(function(){ 
      $(".social-card1").css({"transform":"translateY(80px)","transition":".5s","opacity":"0"})(); 
     
    });
  
  });
 
