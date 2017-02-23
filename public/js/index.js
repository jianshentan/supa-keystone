$(document).ready(function() {
  
  /* ----------------------
   * SPLASH IMAGE ROTATION 
   * ---------------------- */
  var color = ["#FED202", "#06E2FF", "#FF044C"]; // yellow, blue, red
  setInterval(function() {
    useNext(".splash-left-image");
    useNext(".splash-center-image");
    useNext(".splash-center-text");
    useNext(".splash-right-image");
    
    // background color:
    $("#splash-left").css("background-color", color[0]);
    var nextColor = color[0];
    color.shift();
    color.push(nextColor);
  }, 3000);
  
  function useNext(selector) {
    var curr = $(selector+".active");  
    var next = null;
    if (curr.next(selector).length > 0) {
      next = curr.next(selector);
    } else {
      next = curr.parent().children(selector+":first-child");
    }
    curr.removeClass("active");
    next.addClass("active");
  }
  
  /* ----------------------
   * LIGHT BOX 
   * ---------------------- */
  $(".tile-lightbox-close").click(function() {
    $(this).parent().parent().css("display", "none");
  });  
  
  $(".tile-lightbox-overlay").click(function() {
    $(this).css("display", "none");
  });
  
  $(".tile-video-play").click(function(){ 
    $(this).next(".tile-lightbox-overlay").css("display", "block");
  });
   
  /* ----------------------
   * FAQ Interactions
   * ---------------------- */ 
  $(".faq-section-toggle").each(function() {
    $(this).click(function() {
      var content = $(this).parent().next(".faq-section-content");
      content.slideToggle();
    });
  });
});