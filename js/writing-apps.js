//function to initialize materialize framework for materialbox for each image
$(document).ready(function(){
  $('.materialboxed').materialbox();
});

//function to anchor the app list items to appropriate link minus the height of the nav bar
function offsetAnchor() {
    window.scrollTo(window.scrollX, window.scrollY - 80)
}

  //run the offsetAnchor function when any of the app-list-items are clicked
  $('.app-list-item').click(function() {
    // Click events are captured before hashchanges. Timeout
    // causes offsetAnchor to be called after the page jump.
    window.setTimeout(function() {
      offsetAnchor()
    })
  })

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