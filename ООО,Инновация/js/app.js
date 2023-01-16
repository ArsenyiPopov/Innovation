const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    loop: true,
    speed: 3000,
    spaceBetween: 30,
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
      delay: 7000,
    },
  });

  const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 5,
    loop: true,
    speed: 1000,
    spaceBetween: 5,
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
      autoplay: {
        delay: 1000,
      },
  });

  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 4,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
      delay: 7000,
    },
  });
  

  