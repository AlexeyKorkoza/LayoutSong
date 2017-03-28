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

var acc = document.getElementsByClassName("answer_question_accordion");
var acc1 = document.getElementsByClassName("arrow-bottom");

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            document.getElementsByClassName("arrow-bottom")[0].style.transition = "0.4s";
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}

var childs = $('.amazingslider-box-1').children();
console.log(childs);
childs.each(function(i, e) {
    if ($(e).attr('class') === undefined) {
        $(e).remove();
    }
});