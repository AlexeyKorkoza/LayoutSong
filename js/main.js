$(document).ready(function() {

    $("#nav-icon").click(function() {
        $(this).toggleClass("open");
        $(".navigation").toggle();
    });

    var childsBox = $('.amazingslider-box-1').children();
    childsBox.each(function(i, e) {
        if ($(e).attr('class') === undefined) {
            $(e).remove();
        }
    });

    var childsBullet = $('.amazingslider-bullet-wrapper-1').children();
    childsBullet.each(function(i, e) {
        $(e).css("display", "none");
    });

    $(".amazingslider-bottom-shadow-1 img").remove();

    var count = $(".amazingslider-bullet-wrapper-1 div").length;
    var currentValue = 1;
    $('.number_of_slide').text(currentValue + " из " + count);

    $(".amazingslider-arrow-right-1").click(function() {
        currentValue++;
        if (currentValue > 7) {
            currentValue = 1;
            $('.number_of_slide').text(currentValue + " из " + count);
        } else {
            $('.number_of_slide').text(currentValue + " из " + count);
        }
    });

    $(".amazingslider-arrow-left-1").click(function() {
        currentValue--;
        if (currentValue == 0) {
            currentValue = 7;
            $('.number_of_slide').text(currentValue + " из " + count);
        } else {
            $('.number_of_slide').text(currentValue + " из " + count);
        }
    });
});

/* feedback-slider */
$('.feedback_slider .owl-carousel').owlCarousel({
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

$(".feedback_slider .owl-prev").empty();
$(".feedback_slider .owl-next").empty();
$(".feedback_slider .owl-dots").remove();

/* promo_feedback-slider */
$('.promo_feedback .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        }
    }
});

$(".promo_feedback .owl-prev").empty();
$(".promo_feedback .owl-next").empty();
$(".promo_feedback .owl-dots").remove();

var acc = document.getElementsByClassName("answer_question_accordion");

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
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

function openWhom(evt, whom) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("promo_feedback");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(whom).style.display = "block";
    evt.currentTarget.className += " active";
}

var modal = document.getElementById('Modal');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}