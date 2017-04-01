$(document).ready(function() {

    $("#nav-icon").click(function() {
        $(this).toggleClass("open");
        $(".navigation").toggle();
    });

    /* videoslider */
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

    /* accordion */
    function close_accordion_section() {
        $('.accordion .accordion_title').removeClass('active');
        $('.accordion .accordion-panel').slideUp(500).removeClass('open');
    }

    $('.accordion_title').click(function(e) {
        var currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
            $(this).addClass('active');
            $('.accordions ' + currentAttrValue).slideDown(500).addClass('open');
        }

        e.preventDefault();
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

/* promo_feedback slider and tabs*/
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

/* modal */
var modal = document.getElementById('Modal');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}