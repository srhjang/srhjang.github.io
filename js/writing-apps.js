//function to initialize Materialize framework for materialbox for each image
$(document).ready(function(){
  $('.materialboxed').materialbox();

  // function to anchor the app list items to the respective link minus the height of the nav bar
  function offsetAnchor() {
    var navHeight = $('.nav-bar').height()+ 40
    window.scrollTo(window.scrollX, window.scrollY - navHeight)
  }

// This will run the offsetAnchor function if there is a change in the URL anchor
  $(window).on("hashchange", offsetAnchor)

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

})

// the second offsetcAnchor function --> Timeout
  // function offsetAnchor() {
  //   var navHeight = $('.nav-bar').height()+ 40
  //   window.scrollTo(window.scrollX, window.scrollY - navHeight)
  // }

  //   //run the offsetAnchor function when any of the app-list-items are clicked
  // $('.app-list-item').click(function() {
  //   // Click events are captured before hashchanges. Timeout
  //   // causes offsetAnchor to be called after the page jump.
  //   window.setTimeout(function() {
  //     offsetAnchor()
  //   })
  // })