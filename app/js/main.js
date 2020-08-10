$(function(){
  $(".sidebar__toggle").click(function() {
    $(this).toggleClass("show-sidebar");
    $(".sidebar__item").toggleClass("open-sidebar");
  })  
});