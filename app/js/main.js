$(document).ready(function () {
  alert($("html").innerWidth());
  $("#nav-icon").click(function () {
    $(this).toggleClass("open");
    $(".navigation").toggle();
  });

  /* videoslider */
  var childsBox = $(".amazingslider-box-1").children();
  childsBox.each(function (i, e) {
    if ($(e).attr("class") === undefined) {
      $(e).remove();
    }
  });

  var childsBullet = $(".amazingslider-bullet-wrapper-1").children();
  childsBullet.each(function (i, e) {
    $(e).css("display", "none");
  });

  $(".amazingslider-bottom-shadow-1 img").remove();
  $(".amazingslider-text-1 .amazingslider-title-1").remove();

  var count = $(".amazingslider-bullet-wrapper-1 div").length;
  var currentValue = 1;
  $(".number_of_slide").text(currentValue + " из " + count);

  $(".amazingslider-arrow-right-1").click(function () {
    currentValue++;
    if (currentValue > 7) {
      currentValue = 1;
      $(".number_of_slide").text(currentValue + " из " + count);
    } else {
      $(".number_of_slide").text(currentValue + " из " + count);
    }
  });

  $(".amazingslider-arrow-left-1").click(function () {
    currentValue--;
    if (currentValue == 0) {
      currentValue = 7;
      $(".number_of_slide").text(currentValue + " из " + count);
    } else {
      $(".number_of_slide").text(currentValue + " из " + count);
    }
  });

  var htmlWidth = $("html").innerWidth();
  if (htmlWidth < 625) {
    $("#amazingslider-1").css({"width": "", "width": htmlWidth - 100});
  }

  /* accordion */
  function close_accordion_section() {
    $(".accordion .accordion_title").removeClass("active");
    $(".accordion .accordion-panel").slideUp(500).removeClass("open");
  }

  $(".accordion_title").click(function (e) {
    var currentAttrValue = $(this).attr("href");

    if ($(e.target).is(".active")) {
      close_accordion_section();
    } else {
      close_accordion_section();
      $(this).addClass("active");
      $(".accordions " + currentAttrValue).slideDown(500).addClass("open");
    }

    e.preventDefault();
  });

  var super_offerWidth = $(".super_offer").innerWidth();
  $(".super_offer .container").css("width", super_offerWidth + 40);
  if (super_offerWidth < 1250) {
    var details_offerWidth = $(".details_offer").innerWidth();
    $(".super_offer .container h1").css({
      "margin-left": (super_offerWidth / 10.9),
      "margin-right": (super_offerWidth / 10.9)
    });
    $(".super_offer .container h2").css({
      "margin-left": (super_offerWidth / 10.9),
      "margin-right": (super_offerWidth / 10.9)
    });
    $(".details").css({"margin-left": (super_offerWidth / 10.9), "margin-right": (super_offerWidth / 10.9)});
  }
  $(".details_offer").css("display", "flex");

  $(".mejs__time-float").remove();

  /*
  if($("html").innerWidth() < 550){
    $(".mejs__time-rail").css("margin", "13px 0 0 30px");
  } else {
    $(".mejs__time-rail").css("margin", "13px 0 0 49px");
  }*/

});

/* feedback-slider */
$(".feedback_slider .owl-carousel").owlCarousel({
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
$(".promo_feedback .owl-carousel").owlCarousel({
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
var modal = document.getElementById("Modal");

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.onkeydown = function (evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    modal.style.display = "none";
  }
};
