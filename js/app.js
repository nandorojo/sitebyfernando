$(document).ready(function () {
    'use strict';
    var scroll = $(window).scrollTop();

    function loadSite() {
        $('#homeFirst .buttonList').show(); // show button container on home
        $('#homeFirst .buttonWrapper').addClass('animated fadeInUp'); // show buttons
        $('.bubbleWrap').addClass('active');
        $('.bubble').addClass('animated fadeInUp');
        $('body').removeClass('overflowHidden');
        // $('#drift-widget-container').delay(4000).fadeIn(1000); // show Drift chat
        // $('.header').addClass('active'); // show header
    }

    function welcomeText() {
        $("#welcomeText").typed({
            strings: ["<h1>Fernando Rojo</h1> <p>Entrepreneur, designer, and developer.</p>"],
            typeSpeed: 20,
            callback: function () {
                loadSite();
            }
        });
    }

    function bubbleScroll() { // make the bubbles move on scroll
        var $bubbles = $('.bubbleWrap'),
            screenWidth = $(window).width();
        if (scroll < ($('#homeFirst').height() + window.innerHeight)) {
            $bubbles.each(function (i) {
                var horizontalScroll = -(scroll / 5);
                if (i === 0) horizontalScroll = (scroll / 3);
                $(this).css('transform', 'translate(' + horizontalScroll + 'px , -' + (scroll / 2) + 'px)');
            });
        }
    }
    
    function headerFadeScroll() {
        $('#homeSecond').find('h3, p').each(function(){
            var distanceToTop = $(this).offset().top;
            if (scroll >= (distanceToTop - $(window).height() - 50) && !$(this).hasClass('scrollingDone')) {
                $(this).removeClass('fadeOut');
                $(this).addClass('animated fadeIn');
                $(this).removeAttr('style')
            }
        });
    }

    if (window.location.hash) {
        var hash = window.location.hash.substring(1), //Puts hash in variable, and removes the # character
            splitHash = hash.replace('#', '').replace('.html', ''),
            $newPage = $("#" + splitHash);
        if ($newPage.length != 0) {
            $('.page').removeClass('active');
            $newPage.addClass('active');
        };
        if ($('#index').hasClass('active')) {
            welcomeText();
        }
    } else {
        welcomeText();
    }

    $(window).on('scroll', function () {
        scroll = $(window).scrollTop();
        bubbleScroll();
        headerFadeScroll();
    });

    $('a[href$=".html"]').on('click', function (e) { // simulate page changes without actually changing page

        var $currentPage = $('page.active'),
            $link = $(this).attr('href').replace('.html', ''),
            $targetPage = $('#' + $link),
            $this = $(this);
        if ($targetPage.length !== 0) {
            e.preventDefault(); // if the <page> exists
            if ($this.attr('target') != '_blank' && !$targetPage.hasClass('active')) { // if it isn't target blank 
                $('page').removeClass('active');
                $targetPage.addClass('active');
            }
        };
        window.location.hash = '#' + $link;
    });

});
