$(document).ready(function() {
  $(".tile-lightbox-close").click(function() {
    $(this).parent().parent().css("display", "none");
  });  
  $(".tile-video-play").click(function(){ 
    $(this).next(".tile-lightbox-overlay").css("display", "block");
  });
});