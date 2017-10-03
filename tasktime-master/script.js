$(document).ready(function(){
    $("#fade").hide(0).delay(1000).fadeIn(3000)
});

$(document).ready(function(){
  $("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });
 });

$(document).ready(function(){
$('.timepicker').wickedpicker();

});


























































