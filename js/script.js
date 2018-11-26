
$(document).ready(function () {
    var navbar = document.getElementsByTagName("nav")[0];
    var sticky = navbar.offsetTop;

    function myFunction() {
      if(window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }

    window.onscroll = function() { myFunction(); };

    var slideCenter = $(window).width()/2-100;

    window.addEventListener("scroll", function(event) {
        $(".slide").animate({
            marginLeft: slideCenter
        },1000);
    });          
}, false);