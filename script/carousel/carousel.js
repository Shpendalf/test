const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    spaceBetween: 4,
    centerSlide: 'true',
    freemode:'true',

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-prev',
      prevEl: '.swiper-button-next',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });