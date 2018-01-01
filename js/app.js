$(document).ready(function () {
    'use strict';
    var $window = $(window),
        $body = $('body'),
        scroll = $window.scrollTop(),
        pageHistoryState = 0;

    /*
        function loadSite() {
            $('#homeFirst .buttonList').show(); // show button container on home
            $('#homeFirst .buttonWrapper').addClass('animated fadeInUp'); // show buttons
            $('#homeFirst .bubbleWrap').addClass('active');
            $('#homeFirst .bubble').addClass('animated fadeInUp');
            // $('#drift-widget-container').delay(4000).fadeIn(1000); // show Drift chat
            // $('.header').addClass('active'); // show header
        }

        function welcomeText() {
            $("#welcomeText").typed({
                strings: ["<h1>Fernando Rojo</h1> <p>Entrepreneur, designer, &amp; developer.</p>"],
                typeSpeed: 20,
                callback: function () {
                    loadSite();
                }
            });
        }

        function bubbleScroll() { // make the bubbles move on scroll
            var $bubbles = $('.bubbleWrap');
            if (scroll < ($('#homeFirst').height() + window.innerHeight)) {
                $bubbles.each(function (i) {
                    var horizontalScroll = -(scroll / 5);
                    if (i === 0) horizontalScroll = (scroll / 3);
                    $(this).css('transform', 'translate(' + horizontalScroll + 'px , -' + (scroll / 2) + 'px)');
                });
            }
        }

        
        
        function loadPage(url) {
            if (url !== 'index.html') {
                url = 'pages/' + url;
            }
            $('.page').load(url + '.html .eject');
            $(window).scrollTop(0);
            pageHistoryState = parseFloat(pageHistoryState + 1);
            history.pushState(pageHistoryState, null, url);
        }

        $body.on('click', '[data-page-link]', function (e) {
            var link = $(this).attr('data-page-link');
            loadPage(link);
        });
        */

    $window.on('scroll', function () {
        scroll = $(window).scrollTop();
    });

    /*
        if (window.location.pathname) {
            var length = window.location.pathname.split('/').length,
                link = window.location.pathname.split('/')[length - 1];
            if (link === '' || link === 'index.html') {
                loadPage('index')
            }
        }
        */

});
