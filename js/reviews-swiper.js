const reviewsSwiper = new Swiper('.reviews-swiper', {
  // Enable smooth sliding
  speed: 800,
  
  // Enable touch/swipe on all devices
  touchRatio: 1,
  simulateTouch: true,
  
  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
  // Enable autoplay
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  
  // Enable loop
  loop: true,
  
  // Enable keyboard control
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  
  // Enable mousewheel control
  mousewheel: {
    invert: true
  },
  
  // Add smooth effect
  effect: 'slide',
  
  // Enable accessibility
  a11y: true,
}); 