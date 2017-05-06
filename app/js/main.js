$(document).ready(function () {

  /* nav menu */
  $("#nav-icon").click(function () {
    $(this).toggleClass("open");
    $(".navigation").toggle();
  });

  /* audio */
  $(".mejs__time-float").remove();

  /* sticky */
  $("header").sticky({topSpacing:0});

  /* videoslider */
  function clearTitleAmazing() {
    var childsBox = $(".amazingslider-box-1").children();
    childsBox.each(function (i, e) {
      if ($(e).attr("class") === undefined) {
        $(e).remove();
      }
    });
  }

  var childsBullet = $(".amazingslider-bullet-wrapper-1").children();
  childsBullet.each(function (i, e) {
    $(e).css("display", "none");
  });

  $(".amazingslider-bottom-shadow-1 img").remove();
  $(".amazingslider-text-1 .amazingslider-title-1").remove();

  var count = $(".amazingslider-slides").children().length;
  var currentValue = 1;
  $(".number_of_slide").text(currentValue + " из " + count);

  $(".amazingslider-arrow-right-1").click(function () {
    clearTitleAmazing();
    currentValue++;
    if (currentValue > 7) {
      currentValue = 1;
      $(".number_of_slide").text(currentValue + " из " + count);
    } else {
      $(".number_of_slide").text(currentValue + " из " + count);
    }
  });

  $(".amazingslider-arrow-left-1").click(function () {
    clearTitleAmazing();
    currentValue--;
    if (currentValue == 0) {
      currentValue = 7;
      $(".number_of_slide").text(currentValue + " из " + count);
    } else {
      $(".number_of_slide").text(currentValue + " из " + count);
    }
  });

  var timers = $('.amazingslider-timer-1');
  new ResizeSensor(timers, function() {
    clearTitleAmazing();
    timers.each(function () {
      var percentage = $(this).width() / ($(".amazingslider-slider-1").width() - 16) * 100;
      if( percentage >= 101 && percentage < 102 ){
        currentValue++;
        if (currentValue > 7) {
          currentValue = 1;
          $(".number_of_slide").text(currentValue + " из " + count);
        } else {
          $(".number_of_slide").text(currentValue + " из " + count);
        }
      }
    });
  });

  var htmlWidth = $("html").innerWidth();
  if (htmlWidth < 625) {
    $("#amazingslider-1").css({"width": "", "width": htmlWidth - 100});
  }

  /* spoilers */
  var spoilers = $(".spoiler a");
  spoilers.click(function (e) {
    e.preventDefault();
    spoilers.not(this).siblings('div').animate({
      height: 'hide'
    }, 0);

    var cItem = $(this).siblings('div');
    if (cItem.css('display') == 'none') {
      cItem.animate({
        height: 'show'
      }, 300);
    } else {
      cItem.animate({
        height: 'hide'
      }, 300);
    }

  });

  /* SuperOffer */
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
  autoplay: true,
  smartSpeed: 500,
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
$(".owl-carousel .item").on("touchstart mousedown", function (e) {
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
  autoplay: true,
  smartSpeed: 500,
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
function Modal(evt) {

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
  outputCountCallback: function (count) {
    if (count >= 1000000) {
      return count = parseInt(count / 1000000) + ' мл';
    }
    else if (count >= 1000) {
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
  outputCountCallback: function (count) {
    if (count >= 1000000) {
      return count = parseInt(count / 1000000) + ' мл';
    }
    else if (count >= 1000) {
      return count = parseInt(count / 1000) + ' тыс';
    }
    return count;
  },
  url: 'https://mail.ru'
};

new SocialButtons(options);

var music_whom = $(".promo_music_whom li");
music_whom.click(function (e) {
  e.preventDefault();
  music_whom.each(function (i,item) {
    if($(item).attr("class") !== undefined){
      $(item).removeClass();
    }
  });
  $(this).addClass("active");
});
