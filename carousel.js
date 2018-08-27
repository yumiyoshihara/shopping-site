$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }        
        );
});




$(document).ready(function(){
  $("#categories").click(function(){
      $(this).toggleClass("down_categries");
    $(".categories_toggle").slideToggle();
  });
});


$(window).load(function(){
  $("#smallimg img").click(function(){
    var img_src = $(this).attr("src");
    $("#bigimg img").attr("src", img_src);
  });
});

