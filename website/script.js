



//for scroll up botton
window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
	        document.getElementById("btnUp").style.display = "block";
	    } else {
	        document.getElementById("btnUp").style.display = "none";
	    }
	}

	$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#btnUp").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//end of scroll up

		    //for contact page
		 
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#goToContact").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1600, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//end of contact

//for preloader - add class	
$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3500);
	
});