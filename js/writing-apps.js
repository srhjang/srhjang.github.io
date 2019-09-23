$(document).ready(function(){
  $('.materialboxed').materialbox();
});



//function to anchor list of apps to appropriate link
function offsetAnchor() {
    if (location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY - 80);
    }
  }
  
  // Captures click events of all <a> elements with href starting with #
  $(document).on('click', 'a[href^="#"]', function(event) {
    // Click events are captured before hashchanges. Timeout
    // causes offsetAnchor to be called after the page jump.
    window.setTimeout(function() {
      offsetAnchor();
    }, 0);
  });
  
  // Set the offset when entering page with hash present in the url
  window.setTimeout(offsetAnchor, 0);


 //when topButton is clicked, run scrolltoTop function to scroll to top of page
  $('#topButton').click(scrollToTop)
  $(window).scroll(function() {displayScroll()})

//only display the topButton when scrolling down
function displayScroll() {
  if ($(window).scrollTop() > 100) {
    $('#topButton').css("display", "block");
  } else {
    $('#topButton').css("display", "none");
  }
}

  // When the user clicks on the button, scroll to the top of the page
  function scrollToTop() {
    $('html, body').animate({scrollTop:0}, 'fast');
        return false;
    // window.scrollTo(0, 0)
  }


  // $('html, body').animate({scrollTop:$(document).height()}, 'slow');
  // return false;