$(function(){

	var defaultTop=parseInt($(".today").css("top"));
  	$(window).on("scroll",function(){
    var scv=$(window).scrollTop();
    $(".today").stop().animate({top:scv+defaultTop+"px"},800);
  });

});
