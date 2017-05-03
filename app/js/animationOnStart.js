var width = $("html").innerWidth();

$('.promo').addClass('hidden').viewportChecker({
  classToAdd: 'visible animated fadeInLeft',
  offset: 200
});

$('.promo .container').addClass('hidden').viewportChecker({
  classToAdd: 'visible animated zoomIn',
  offset: 400
});

var arrSteps = $(".scheme_of_work_steps div");
if (width < 768) {
  arrSteps.each(function (i) {
    if (i % 2 === 0) {
      $('.scheme_of_work_steps div').eq(i).addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 200
      });
    } else {
      $('.scheme_of_work_steps div').eq(i).addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 200
      });
    }
  });
} else if (width >= 768 && width < 1228) {
  $('.scheme_of_work_steps .apply_online').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInLeft',
    offset: 200
  });
  $('.scheme_of_work_steps .payment_method').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInRight',
    offset: 200
  });
  $('.scheme_of_work_steps .get_song').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated zoomIn',
    offset: 200
  });
} else {
  $('.scheme_of_work_steps .apply_online').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInLeft',
    offset: 200
  });
  $('.scheme_of_work_steps .payment_method').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated zoomIn',
    offset: 200
  });
  $('.scheme_of_work_steps .get_song').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInRight',
    offset: 200
  });
}

var arrWho = $(".whom_songs_example .who");
if (width < 970) {
  arrWho.each(function (i) {
    if (i % 2 === 0) {
      $('.whom_songs_example .who').eq(i).addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 200
      });
    } else {
      $('.whom_songs_example .who').eq(i).addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 200
      });
    }
  });
} else {
  arrWho.each(function (i) {
    if ((i + 1) % 3 === 0) {
      $('.whom_songs_example .who').eq(i).addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 200
      });
    }
    if (i === 1 || i === 4) {
      $('.whom_songs_example .who').eq(i).addClass('hidden').viewportChecker({
        classToAdd: 'visible animated zoomIn',
        offset: 200
      });
    }
    if (i === 0 || i === 3) {
      $('.whom_songs_example .who').eq(i).addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 200
      });
    }
  });
}

var arrPrices = $(".prices .price");
if (width < 989) {
  arrPrices.each(function (i) {
    if (i % 2 === 0) {
      $('.prices .price').eq(i).addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 200
      });
    } else {
      $('.prices .price').eq(i).addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 200
      });
    }
  });
} else if (width > 989 && width < 1300) {
  arrPrices.each(function (i) {
    if (i % 2 !== 0) {
      $('.prices .price').eq(i).addClass('hidden').viewportChecker({
        classToAdd: 'visible animated zoomIn',
        offset: 200
      });
    }
    if (i === 0) {
      $('.prices .price').eq(i).addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 200
      });
    }
    if (i === 2) {
      $('.prices .price').eq(i).addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 200
      });
    }
  });
} else {
  arrPrices.each(function (i) {
    if (i === 1 || i === 2) {
      $('.prices .price').eq(i).addClass('hidden').viewportChecker({
        classToAdd: 'visible animated zoomIn',
        offset: 200
      });
    }
    if (i === 0) {
      $('.prices .price').eq(i).addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 200
      });
    }
    if (i === 3) {
      $('.prices .price').eq(i).addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 200
      });
    }
  });
}

$('.example_songs_line').addClass('hidden').viewportChecker({
  classToAdd: 'visible animated zoomIn',
  offset: 200
});

var arrExampleSongs = $('.example_songs_feedbacks .example_songs_feedback');
arrExampleSongs.each(function (i) {
  if (i % 2 === 0) {
    $('.example_songs_feedbacks .example_songs_feedback').eq(i).addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInRight',
      offset: 200
    });
  } else {
    $('.example_songs_feedbacks .example_songs_feedback').eq(i).addClass('hidden').viewportChecker({
      classToAdd: 'visible animated fadeInLeft',
      offset: 200
    });
  }
});

var arrSpoilers = $(".spoilers .spoiler");
if (width < 970) {
  arrSpoilers.each(function (i) {
    if (i % 2 === 0) {
      $('.spoilers .spoiler').eq(i).addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 200
      });
    } else {
      $('.spoilers .spoiler').eq(i).addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 200
      });
    }
  });
} else {
  $('.spoilers .spoiler_first_column').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInLeft',
    offset: 200
  });
  $('.spoilers .spoiler_second_column').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeInRight',
    offset: 200
  });
}

$('footer').addClass('hidden').viewportChecker({
  classToAdd: 'visible animated fadeInUp',
  offset: 200
});
