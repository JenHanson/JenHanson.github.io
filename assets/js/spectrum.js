/*!
 * Spectrum v1.2.0 (http://themes.startbootstrap.com/spectrum-v1.2.0)
 * Copyright 2013-2015 Start Bootstrap Themes
 * Spectrum license purchased
 */
 
// Functions to run on document ready
jQuery(document).ready(function() {

    // Find Mobile Devices
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    // Initialize Stellar.js Parallax
    if (!isMobile.any()) {
        $(window).stellar({
            horizontalScrolling: false,
            verticalOffset: 0,
            horizontalOffset: 0,
            hideDistantElements: false
        });
    }

    // Activates the Bootstrap Carousel for the Intro Header Options
    $('.carousel').carousel({
        interval: 8000,
        pause: "false",
    })

    // Activates Owl Carousel Sliders
    $("#about-1-carousel, #services-1-carousel").owlCarousel({

        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        autoPlay: 5000,
        stopOnHover : true,
        paginationNumbers: false,


    });

    $("#about-3-carousel").owlCarousel({

        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 3]

    });

    $("#clients-carousel").owlCarousel({

        items: 5,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]

    });

    //Project Portfolio Carousel
    $("[id^='project-'][id$='-carousel']").owlCarousel({
        //autoPlay : 3000,
        stopOnHover : true,
        singleItem: true,
        //itemsScaleUp: true,
        loop: false,
        autoHeight: true,
        transitionStyle: "fade"
        //navigation:true,
        //navigationText: [
        //    "<i class='fa fa-angle-left'></i> Prev",
        //    "Next <i class='fa fa-angle-right'></i>"
        //]
        //afterInit : function(elem){
        //    var that = this
        //    that.owlControls.prependTo(elem)
        //}//
    });


    // Activates FitVids jQuery Plugin
    $(".container").fitVids();

    // Activates Magnific Popup jQuery Plugin
    $('.gallery-item').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
    });

    // Floating label Headings for the Contact Form
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });

    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();  


    // Close modals on Back Button press instead of leaving the page
    $(".modal").on("shown.bs.modal", function()  { // any time a modal is shown
        var urlReplace = "#" + $(this).attr('id'); // make the hash the id of the modal shown
        history.pushState(null, null, urlReplace); // push state that hash into the url
    });

    // If a pushstate has previously happened and the back button is clicked, hide any modals.
    $(window).on('popstate', function() { 
        $(".modal").modal('hide');
    });
});

// Functions to run on window load
$(window).load(function() {

    // Isotope Plugin for Portfolio Filtering
    // init Isotope
    var $container = $('.isotope').isotope({
        itemSelector: '.portfolio-item'
    });
    $('#filters').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({
            filter: filterValue
        });
    });
    // change is-checked class on buttons
    $('#filters').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function() {
            $buttonGroup.find('.active').removeClass('active');
            $(this).addClass('active');
        });
    });

});
