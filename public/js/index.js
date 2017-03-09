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
  var frame = $(".tile-lightbox iframe");
  var vidsrc = frame.attr('src');
 
  $(".tile-lightbox-close").click(function() {
    $(this).parent().parent().css("display", "none");
    frame.attr('src', '');  
  });  
  
  $(".tile-lightbox-overlay").click(function() {
    $(this).css("display", "none");
    frame.attr('src', '');  
  });
  
  $(".tile-video-play").click(function(){ 
    $(this).next(".tile-lightbox-overlay").css("display", "block");
    frame.attr('src', vidsrc);
  });
   
  /* ----------------------
   * Video
   * ---------------------- */ 
   
 
  
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
  
  /* ----------------------
   * Contact form
   * ---------------------- */ 
  // Variable to hold request
  var request;
  
  // Bind to the submit event of our form
  $("#tile-contact-form").submit(function(event){
    $("#tile-contact-submit-button").removeClass("active");
    $("#tile-contact-submit-loading").addClass("active");
    $('#tile-contact-form input, #tile-contact-form textarea').attr('readonly', 'readonly');
  
    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);
  
    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");
  
    // Serialize the data in the form
    var serializedData = $form.serialize();
  
    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);
  
    // Fire off the request to /form.php
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwIRjzmvyY03GKZkifN2uAUAddb-lweyxlI3k2KK9uA4i7D88s/exec",
        type: "post",
        data: serializedData
    });
  
    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log("Submit to google spreadsheet worked!");
        console.log(response);
        console.log(textStatus);
        console.log(jqXHR);
        $("#tile-contact-submit-loading").removeClass("active");
        $("#tile-contact-submit-success").addClass("active");
    });
  
    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
        $("#tile-contact-submit-loading").removeClass("active");
        $("#tile-contact-submit-fail").addClass("active");
    });
  
    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });
  
    // Prevent default posting of form
    event.preventDefault();
  });
  
});