new Swiper('.image-slider',{
    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
    slidesPerView: 1,
            spaceBetween: 150,
            slidesPerGroup: 1,
            centerSlidesBounds: true,
            centerInsufficientSlides: true,
            centerSlides: true,
            loop: true,
            loopFillGroupWithBlank: true,

            autoplay: {
                delay:2000,

                stopOnLastSlide: false,
             disableOnInteraction: false
            },
            speed: 800,
});