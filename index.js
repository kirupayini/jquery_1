
$(".bt1").on("click",function(){
    $("#h1").slideToggle("slow");
});

$("#h2").click(function(){
  $(".bt2").slideToggle();
});

$(".bt3").keypress(function(event){


  setTimeout($("#h3").text(event.key).addClass("toggle_style"), 100);
});

$(".bt4").click(function(){


  $("#h4").fadeOut(3000).fadeIn(3000);
});
