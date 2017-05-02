$(document).ready(function () {

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
    $(".accordion .accordion-panel").fadeOut("slow").removeClass("open");
  }

  $(".accordion_title").click(function (e) {
    var currentAttrValue = $(this).attr("href");

    if ($(e.target).is(".active")) {
      close_accordion_section();
    } else {
      close_accordion_section();
      $(this).addClass("active");
      $(".accordions " + currentAttrValue).fadeIn("slow").addClass("open");
    }

    e.preventDefault();
  });

  $(".mejs__time-float").remove();

  resizeSuperOffer();

  $(window).resize(function () {
    clearStylesSuperOffer();
    resizeSuperOffer();
  });

  function clearStylesSuperOffer() {
    $(".super_offer .container h1").css({
      "margin-left": "",
      "margin-right": ""
    });
    $(".super_offer .container h2").css({
      "margin-left": "",
      "margin-right": ""
    });
    $(".details").css({
      "margin-left": "",
      "margin-right": ""
    });
  }

  function resizeSuperOffer() {
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
  }

});

/* feedback-slider */
$(".feedback_slider .owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsiveClass: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
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

// disable drag
$(".owl-carousel .item").on("touchstart mousedown", function(e) {
  e.stopPropagation();
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
function Modal(evt){

var modal = document.getElementById("Modal");
modal.style.display = "block";

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

}

var options = {
  services: ['vkontakte'],
  id: 'social-1',
  components: ['icon'],
  theme: 'color',
  title: 'Mail.Ru: почта, поиск в интернете, новости, игр!',
  counter: true,
  outputCountCallback: function(count) {
    if(count >= 1000000) {
      return count = parseInt(count / 1000000) + ' мл';
    }
    else if(count >= 1000) {
      return count = parseInt(count / 1000) + ' тыс';
    }
    return count;
  },
  url: 'https://mail.ru'
};

new SocialButtons(options);

var options = {
  services: ['vkontakte'],
  id: 'social-2',
  components: ['icon'],
  theme: 'color',
  title: 'Mail.Ru: почта, поиск в интернете, новости, игр!',
  counter: true,
  outputCountCallback: function(count) {
    if(count >= 1000000) {
      return count = parseInt(count / 1000000) + ' мл';
    }
    else if(count >= 1000) {
      return count = parseInt(count / 1000) + ' тыс';
    }
    return count;
  },
  url: 'https://mail.ru'
};

new SocialButtons(options);
