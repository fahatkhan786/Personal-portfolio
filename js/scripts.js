$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20) 
      $(".navbar").addClass("sticky");
    else
      $(".navbar").removeClass("sticky");
  });

  $('.toggler').click(function(){
  	$(this).toggleClass("active");
  	$(".nav-menu").toggleClass("active");
  });

  $('.projects-content').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{enabled:true}
  });
});