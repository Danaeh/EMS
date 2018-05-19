var player, iframe;

var getRemainingTime = function getRemainingTime(deadline) {

    var now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainSeconds: remainSeconds,
        remainMinutes: remainMinutes,
        remainHours: remainHours,
        remainDays: remainDays,
        remainTime: remainTime
    };
};

var countdown = function countdown(deadline) {
    var timerUpdate = setInterval(function () {
        var t = getRemainingTime(deadline);

        $('#countdown-days').html(t.remainDays);
        $('#countdown-hours').html(t.remainHours);
        $('#countdown-minutes').html(t.remainMinutes);
        $('#countdown-seconds').html(t.remainSeconds);

        if (t.remainTime <= 1) {
            clearInterval(timerUpdate);
            el.innerHTML = finalMessage;
        }
    }, 1000);
};

var addContact = function addContact(form) {

  var data = form.serializeArray().reduce(function (obj, item) {
    obj[item.name] = item.value;
    return obj;
  }, {});

  $.ajax({
    type: "POST",
    url: 'https://api.agentmile.dev.kubide.es/contacts-us',
    data: JSON.stringify(data),
      contentType: 'application/json',
      success: function (output)  {
        toastr.info('Your message has been successfully sent!');

          $('.contact-form').find("input[type=text], textarea[type=textarea], input[type=email]").val("");
    }
  })
};

var dataCities = {

    "Las Vegas":{
        event: 'ICSC RECon',
        date: ' May 20-23 2018',
        place:'Las Vegas Convention Center, Las Vegas, NV\n',
        description:'RECon is the world’s largest global gathering of retail real estate professionals. Join leading developers, owners, brokers, and retailers to conduct a year’s worth of business under one roof, in record time. \n',
        url:'https://www.icsc.org/attend-and-learn/events/details/recon-the-global-retail-real-estate-convention6'
    },
    "Hong Kong2":{
        event: 'Global Meetup 2018 – Unlocking business opportunities',
        description:'We are bringing together 150 selected startups from around the world with a special invite only group of innovation professionals, government officials, and investors. The goal is simply to unlock business opportunities together. Oh and of course to enjoy life and have a lot of fun. Feel you should be invited as well?\n',
        date: '30TH OF MAY - 1ST OF JUNE\n',
        place:'--',
        url:'https://riseconf.com/?gclid=Cj0KCQjwttbWBRDyARIsAN8zhbJyGIWmj9T3vppXPzM6hn9c4T260o7P3prJsP1OaHEf1Ofg_ufvirAaAnI9EALw_wcB'
    },
    "Singapore":{
        event: 'Innovfest unbound ',
        description:'Innovfest unbound is the anchor event of Smart Nation Innovations, a week-long series of events that showcase Asia’s most innovative developments. In 2018, we\'ll welcome over 12,000 entrepreneurs, brands, corporates, investors and tech start-ups from 100+ countries to meet and share new ideas, build partnerships and celebrate digital disruption.\n',
        date: '5 & 6 June 2018',
        place:'Marina Bay Sands, Singapore',
        url:'https://unbound.live/innovfest-unbound-2018?utm_source=asia%20finance&utm_term=events'
    },
    "Hong-Kong":{
        event: 'RISE HONG KONG',
        description:'RISE is produced by the team behind Web Summit. In 6 short years, Web Summit has become Europe’s largest tech conference which last year attracted 53,000 attendees from 136 countries around the world.\n' +
        'In July 2018, people from the world’s biggest companies and most exciting startups will come to Hong Kong to share their stories and experiences. They’ll be joined by major global media, hundreds of investors and thousands of attendees for three days of legendary networking.\n.',
        date: 'Jun 7',
        place:'Hong Kong',
        url:'https://riseconf.com/?gclid=Cj0KCQjwttbWBRDyARIsAN8zhbJyGIWmj9T3vppXPzM6hn9c4T260o7P3prJsP1OaHEf1Ofg_ufvirAaAnI9EALw_wcB'
    },
    "Tel Aviv":{
        event: 'TechCrunch Tel Aviv',
        description:'The third time is a charm, Tel Aviv. After holding a Meetup + Pitch-off the last two years in Israel, TechCrunch is returning on 7 June 2018 for a day-long conference. As much fun as networking on a roof facing the Mediterranean Sea is, we’re ready to dig deeper into the tech that is coming out of Israel, focusing on mobility.',
        date: 'Jun 7',
        place:'Tel Aviv',
        url:'https://techcrunch.com/events/techcrunch-tel-aviv/'
    },
    "London":{
        event: 'BitcoinCRE',
        date: ' June 14, 2018',
        place:'London',
        description:'#BitcoinCRE attracts the best minds in the blockchain and real estate space. Venture Capitalists, Startup Founders, Academics, Government Officials and Blockchain Enthusiasts come together to share their thoughts on how blockchain and cryptocurrencies are reshaping the real estate landscape.\n.',
        url:'http://getbitcoincre.com/'
    },
    "Singapore2":{
        event: 'Bfc apac',
        description:' 2nd Blockchain for Finance Conference, APAC',
        date: 'June 20-21',
        place:'Singapore',
        url:'https://blockchainapac.fintecnet.com/'
    },
    "Bangkok":{
        event: 'Techsauce',
        description:'18 will be no exception with a focus on deep-tech startups and technology with world-class speakers including international & Thai startups. Join over 10,000 global startups, venture capitalists, angel investors, large corporations, and tech enthusiast from around the world',
        date: '​22-23 of June 2018',
        place:'Bangkok',
        url:'https://summit.techsauce.co/'
    },
    "Singapore3":{
        event: 'Echelon',
        description:'SINGAPORE EXPO | ORGANIZED BY e27 e27’s flagship platform empowering insights, connections, talent and funding opportunities for all stakeholders of Asia’s tech ecosystem to build and grow their businesses. ',
        date: '28-29 JUNE 2018',
        place:'Echelon',
        url:'https://e27.co/echelon/asia/'
    },
    "San Francisco":{
        event: 'Inman Connect',
        date: 'July 16 – 20, 2018',
        place:'San Francisco',
        description:'The format for the second instance of Inman’s 2018 real estate conferences remains largely the same as the New York variety: Lots of comprehensive sessions on real estate marketing, sales, and technology.\n' +
        'Speakers and details for this version of Inman Connect are TBD, but it’s practically a guarantee this popular industry event will deliver the goods needed to help your business grow.\n',
        url:'https://www.inman.com/event/inman-connect-san-francisco-2018/'
    }
};

//MODAL VIDEO

function openModal(id) {
  $(id).modal('show');
  player.playVideo();
}

function closeModal() {
  setTimeout(function() {$('#whitelistModal').modal('hide')}, 3000)
}

function onPlayerReady(event) {
  var player = event.target;
  iframe = $('#player')[0];
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player',{
    height: '600',
    width: '950',
    videoId: 'FjiBVVVCz4U',
    events: {
      'onReady': onPlayerReady
    }
  });
}

$(document).ready(function() {

    $("#exampleModalCenter").on("hidden.bs.modal", function () {
    player.stopVideo();
  });


    var scroll = new SmoothScroll('a[href="#about"], [href="#roadmap"], [href="#white-paper"], [href="#team"], [href="#faq"], [href="#video-agent2"], [href="#white-paper2"]',  {
        // Selectors
        ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
        header: null, // Selector for fixed headers (must be a valid CSS selector)

        // Speed & Easing
        speed: 500, // Integer. How fast to complete the scroll in milliseconds
        offset: 5, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
        easing: 'easeInOutCubic', // Easing pattern to use
        customEasing: function (time) {
            return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
        },

        // Callback API
        before: function (anchor, toggle) {}, // Callback to run before scroll
        after: function (anchor, toggle) {} // Callback to run after scroll
    });


  $('.dropdown-toggle').dropdown();
  $().button('toggle');

// slider logic
  $('#recipeCarousel').carousel({
    interval: false
  })

  $('.carousel-top .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i=0;i<2;i++) {
      next=next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }

      next.children(':first-child').clone().appendTo($(this));
    }
  });

  $('body').scrollspy({ target: '#navbar-primary' });

  // TOOLTIPS
  /*$('.tooltipComplete').each(function() {
    var body = $(this).attr('data-body');
    $(this).tooltip( {
      placement: 'top',
      animation: true,
      title: "<div class='toogle-roadmap'><h6 class='tooltip-title'>" + body + "</h6><p class='tooltip-subtitle'>Lorem Ipsum <br> Dolor Sit Amet.</p></div>",
      html: true
    })
  });

  $('.tooltipCurrent').each(function () {
    $(this).tooltip( {
      placement: 'top',
      animation: true,
      title: "<div class='toogle-roadmap'><h6 class='tooltip-title'>Current Stage</h6><p class='tooltip-subtitle'>Lorem Ipsum <br> Dolor Sit Amet.</p></div>",
      html: true
    })
  });

  $('.tooltipNext').each(function () {
    $(this).tooltip( {
      placement: 'top',
      animation: true,
      title: "<div class='toogle-roadmap'><h6 class='tooltip-title'>Next Stage</h6><p class='tooltip-subtitle'>Lorem Ipsum <br> Dolor Sit Amet.</p></div>",
      html: true
    })
  });*/

  // CAROUSEL
  $('.carousel').carousel({
    interval: 5000
  });

  // YOUTUBE
  if ($('#btn-full-screen').length) {
    $('#btn-full-screen').click(function(e) {
        e.preventDefault();
      playFullscreen();
    });
  }

  // Countdown
  if ( $('#countdown').length) {
    countdown('Sep 31 2018 21:34:40 GMT-0500');
  }

  //header shadow

  var header = $('#header');

  $(window).scroll(function(e){
    if(header.offset().top !== 0){
      if(!header.hasClass('header-shadow')){
        header.addClass('header-shadow');
        header.addClass('bg-white')
      }
    }else{
      header.removeClass('header-shadow');
      header.removeClass('bg-white')
    }
  });


  $( ".contact-form" ).submit(function( event ) {
    event.preventDefault();
    addContact($(this));
  });

    $('.btn-unselected').click(function() {
        $('#btn-selected').removeClass( "marked" );
    });

    $('.btn-city').click(function() {
    var city = $(this).attr('data-city');
    var info = dataCities[city];
    $('#event-event').html(info.event);
    $('#event-url').html(info.url);
    $('#event-url').attr('href', info.url);
    $('#event-time').html(info.time);
    $('#event-date').html(info.date);
    $('#event-place').html(info.place);
    $('#event-description').html(info.description);

    if ($(window).width() <= 991) {
      var modal = $('#roadshow-modal');
      modal.find('.modal-body')[0].append($('#dataEvents')[0]);
      modal.modal('show');
    }
  });
});