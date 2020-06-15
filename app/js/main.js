$(document).ready(function() {
 
    $('.slider').slick({
        dots: true
        // responsive: [
        //     {
        //         breakpoint: 1200,
        //         settings:{
        //             arrows: true,
        //             dots: true,
        //         }
        //
        //     }
        // ]
    });
    $('.product-slider').slick({
        infinite: false,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.review-slider').slick({
        infinite: false,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings:{
                    arrows: false
                }
            }
        ]
    });
    $('.partners-slider').slick({
        infinite: true,
        autoplay:true,
        slidesToShow: 6,
        arrows: false

    });


    var show = true;
    $(window).on('scroll', function () {
        if (!show) return false;
        var wTop = $(window).scrollTop();
        var eTop = $(".about-us").offset().top;
        if (wTop + 100 >= eTop) {
            console.log(wTop);
            console.log(eTop);
            $('.count-item__number').each(function () {
                $(this).prop('counter', 0).animate({
                    counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            show = false;
        }
    });

          
});

var title = document.querySelectorAll('[data-dark=green]'),
    chk = document.getElementById('chk'),
    body = document.querySelector('.body'),
    nav = document.querySelector('.top-line'),
    card = document.querySelectorAll('[data-dark=card]'),
    lightGray = document.querySelectorAll('[data-dark=light-gray]'),
    white = document.querySelectorAll('[data-dark=white]'),
    logo = document.querySelector('.logo__img'),
    map = document.querySelector('.map'),
    bigLogo = document.querySelector('.big-logo-img'),
    foot = document.querySelectorAll('.foot__item'),
    path = document.querySelectorAll('path'),
    text = document.querySelectorAll('[data-dark=text]');

chk.addEventListener('click', function () {

    if (chk.checked){
        title.forEach(function(titleItem) {
            titleItem.classList.add('dark');
        });
        card.forEach(function(cardItem) {
            cardItem.classList.add('dark-card');
        });
        text.forEach(function(textItem) {
            textItem.classList.add('dark-text');
        });
        lightGray.forEach(function(lightGrayItem) {
            lightGrayItem.classList.add('light-gray');
        });
        white.forEach(function(whiteItem) {
            whiteItem.classList.add('white');
        });
        foot.forEach(function(footItem) {
            footItem.classList.add('foot__green');
        });
        path.forEach(function(pathItem) {
            pathItem.style.fill = '#434343';
        });

        body.classList.add('dark-bg');
        nav.classList.add('dark-bg');
        logo.src="images/logo-dark.svg";
        bigLogo.src="images/big-logo-dark.svg";
        document.querySelector('.about-us').classList.add('dark-bg');
        map.style.backgroundImage = "url('images/map-dark.jpg')";
    }else{
        title.forEach(function(titleItem) {
            titleItem.classList.remove('dark');
        });
        card.forEach(function(cardItem) {
            cardItem.classList.remove('dark-card');
        });
        text.forEach(function(textItem) {
            textItem.classList.remove('dark-text');
        });
        lightGray.forEach(function(lightGrayItem) {
            lightGrayItem.classList.remove('light-gray');
        });
        white.forEach(function(whiteItem) {
            whiteItem.classList.remove('white');
        });
        foot.forEach(function(footItem) {
            footItem.classList.remove('foot__green');
        });
        path.forEach(function(pathItem) {
            pathItem.style.fill = '#DCDCDC';
        });

        body.classList.remove('dark-bg');
        nav.classList.remove('dark-bg');
        logo.src="images/logo.svg";
        bigLogo.src="images/big-logo.svg";
        document.querySelector('.about-us').classList.remove('dark-bg');
        map.style.backgroundImage = "url('images/map-light.jpg')";
    }

});


window.onscroll = function showHeader() {
    var header = document.querySelector('.top-line');
    if (window.pageYOffset > 200) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }
};











window.addEventListener("scroll", function() {
    var distance = window.pageYOffset;
    if (window.pageYOffset > 2200){
        document.querySelector(".foot-super-wrapp").style.top = -((distance - 2200) + 1) + 'px';
    }

});


