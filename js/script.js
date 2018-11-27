$(document).ready(function () {
    var navbar = document.getElementsByTagName("nav")[0];
    var sticky = navbar.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }

    window.onscroll = function () {
        myFunction();
    };
    window.addEventListener("scroll", function (event) {
        if (window.pageYOffset + window.innerHeight > $('.image-wrapper').position().top) {
            $(".left-slide").animate({
                left: 100
            }, 500);
            $(".right-slide").animate({
                left: -100
            }, 500);
        } else {
            $(".left-slide").stop(true, true).css("left", "-100vw");
            $(".right-slide").stop(true, true).css("left", "100vw");
        }
    })
}, false);
