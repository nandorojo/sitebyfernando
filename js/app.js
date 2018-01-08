$(document).ready(function () {
    'use strict';
    var $window = $(window),
        $document = $(document),
        $body = $('body'),
        scrollDistance = $window.scrollTop(),
        screenWidth = $window.width(),
        screenHeight = $window.height(),
        $yipee = $('.yipee'),
        $header = $('header.header'),
        scroll = new SmoothScroll('a[href*="#"]');

    // since position: sticky isn't working for who the fuck knows why, here's a temporary work-around...
    // TODO get rid of this and replace it with CSS 
    // TODO add on screen re-size

    function fixScroll() {
        var $parent = $('[data-fix-parent]'),
            $child = $parent.find('[data-fix-child]'),
            childHeight = $child.height(),
            childOffset = $child.offset().top,
            parentHeight = $parent.height(),
            parentOffset = $parent.offset().top,
            headerHeight = $header.height(),
            left = $child.offset().left,
            width = $parent.width(),
            breakpoint = $parent.data('fix-breakpoint'),
            screenWidth = $window.width();
        $parent.removeClass('d-lg-flex').removeClass('align-items-lg-end');
        if (screenWidth < breakpoint || scrollDistance <= parentOffset - headerHeight) {
            $child.removeAttr('style');
            $parent.removeAttr('style');
            return;
        }
        if (scrollDistance + headerHeight > parentOffset && scrollDistance < parentOffset + parentHeight - childHeight - headerHeight) {
            $child.css({
                'position': 'fixed',
                'top': headerHeight,
                'left': left,
                'width': width
            });
            return;
        }
        if (scrollDistance >= parentOffset + parentHeight - childHeight - headerHeight) {
            $child.css({ // TODO change to a class
                'position': 'static'
            });
            $parent.addClass('d-lg-flex').addClass('align-items-lg-end');
        }
    }

    function yipee() {
        //        if (scroll < screenHeight) {
        //            $yipee.hide();
        //            return;
        //        }
        $yipee.show().css('width', ((scrollDistance) / ($document.height() - screenHeight)) * 100 + '%');
    }
    
    function headerScroll() {
        if (scrollDistance > ($('section').first().height() / 2)) {
            $header.attr('data-js-scrolled', '');
        } else {
            $header.removeAttr('data-js-scrolled');
        }
    }

    if (scrollDistance > 0) {
        fixScroll();
        yipee();
        headerScroll();
    }

    $("img[data-src]").unveil(600);

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

    $window.on('scroll resize touchstart', function () {
        scrollDistance = $(window).scrollTop();
        fixScroll();
        yipee();
        headerScroll();
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
