$(document).ready(function() {
    $("#nav-icon").click(function() {
        $(this).toggleClass("open");
        $("#navigation").toggle();
    });
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        900: {
            items: 3
        }
    }
});

$(".owl-prev").empty();
$(".owl-next").empty();
$(".owl-dots").remove();

var childs = $('.amazingslider-box-1').children();
console.log(childs);
childs.each(function(i, e) {
    if ($(e).attr('class') === undefined) {
        $(e).remove();
    }
});
