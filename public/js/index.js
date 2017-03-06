$(document).ready(function() {
  
  if (mobile) {
    /* -------------------
     * Mobile navigation 
     * ------------------- */
    $("#hamburger").click(function() {
      $("#navigation-overlay").addClass("active");  
      $("#close-hamburger").addClass("active");
      $("#hamburger").removeClass("active");
    });
    
    $("#close-hamburger").click(function() {
      $("#navigation-overlay").removeClass("active");  
      $("#close-hamburger").removeClass("active");
      $("#hamburger").addClass("active");
    });
    
  }
  
  if (!mobile) {
    /* ----------------------
     * SPLASH IMAGE ROTATION 
     * ---------------------- */
    var color = ["#06E2FF", "#89E238", "#FED202", "#F4A93C", "#FF044C"]; // yellow, blue, red
    
    $("#splash-left").css("background-color", color[0]);
    var nextColor = color[0];
    color.shift();
    color.push(nextColor);
    
    setInterval(rotateSplash, 3000);
    
    function rotateSplash() {
      // useNext(".splash-left-image");
      useNext(".splash-center-image");
      useNext(".splash-center-text");
      useNext(".splash-right-image");
      
      // background color:
      $("#splash-left").css("background-color", color[0]);
      var nextColor = color[0];
      color.shift();
      color.push(nextColor);
    }
    
    function useNext(selector) {
      var curr = $(selector+".active");  
      var next = null;
      if (curr.next(selector).length > 0) {
        next = curr.next(selector);
      } else {
        next = curr.parent().children(selector+":first-child");
      }
      curr.fadeOut(function() {
        curr.removeClass("active");
        next.fadeIn(function() {
          next.addClass("active");
        });
      });
      
    }
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
  $(".faq-section-toggle, .faq-section-title").each(function() {
    $(this).click(function() {
      var content = $(this).parent().next(".faq-section-content");
      content.slideToggle();
      $(this).parent().find(".faq-section-toggle").toggleClass("open");
    });
  });
});