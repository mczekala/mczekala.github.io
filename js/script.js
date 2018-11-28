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
        if (window.pageYOffset + window.innerHeight > $('.slide').position().top) {
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


    $(function () {
        $('a[href*=#]').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 500, 'linear');
        });
    });
}, false);
