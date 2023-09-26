// heroswiper
var swiper = new Swiper(".mySwiper-hero", {
    spaceBetween: 30,
    effect:"fade",
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
 





                                             // js for 1,2 & 3 swipercombine
var preloadImages = function(selector) {
  var images = document.querySelectorAll(selector);
  for (var i = 0; i < images.length; i++) {
    var img = new Image();
    img.src = images[i].getAttribute('data-hover-image');
  }
};

// Call the function with the selector for the slides
preloadImages('.swiper-slide');

var mySwiper1 = new Swiper(".mySwiper-1", {
  slidesPerView: 2,
  spaceBetween: -23,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true, // enable loop mode
  autoplay: {
    delay: 3000, // set autoplay delay to 3 seconds
    disableOnInteraction: false, // enable autoplay even when user interacts with the slider
  },
});

var mySwiper2 = new Swiper(".mySwiper-2", {
  slidesPerView: 2,
  spaceBetween: -23,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true, // enable loop mode
  autoplay: {
    delay: 2500, // set autoplay delay to 2.5 seconds
    disableOnInteraction: false, // enable autoplay even when user interacts with the slider
  },
});

var mySwiper3 = new Swiper(".mySwiper-3", {
  slidesPerView: 2,
  spaceBetween: -23,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true, // enable loop mode
  autoplay: {
    delay: 3500, // set autoplay delay to 3.5 seconds
    disableOnInteraction: false, // enable autoplay even when user interacts with the slider
  },
});

// pause autoplay on hover
mySwiper1.el.addEventListener('mouseover', function() {
  mySwiper1.autoplay.stop();
});

mySwiper2.el.addEventListener('mouseover', function() {
  mySwiper2.autoplay.stop();
});

mySwiper3.el.addEventListener('mouseover', function() {
  mySwiper3.autoplay.stop();
});

// resume autoplay on mouseout
mySwiper1.el.addEventListener('mouseout', function() {
  setTimeout(function() {
    mySwiper1.autoplay.start();
  }, 5000); // resume autoplay after 5 seconds
});

mySwiper2.el.addEventListener('mouseout', function() {
  setTimeout(function() {
    mySwiper2.autoplay.start();
  }, 5000); // resume autoplay after 5 seconds
});

mySwiper3.el.addEventListener('mouseout', function() {
  setTimeout(function() {
    mySwiper3.autoplay.start();
  }, 5000); // resume autoplay after 5 seconds
});
var slides1 = document.querySelectorAll('.swiper-slide.mySwiper-1');
var slides2 = document.querySelectorAll('.swiper-slide.mySwiper-2');

for (var i = 0; i < slides1.length; i++) {
  slides1[i].addEventListener('mouseover', function() {
    var bgImage = this.style.backgroundImage;
    var hoverImage = this.getAttribute('data-hover-image');
    this.style.backgroundImage = 'url(' + hoverImage + ')';
    this.setAttribute('data-bg-image', bgImage);
  });
  
  slides1[i].addEventListener('mouseout', function() {
    var bgImage = this.getAttribute('data-bg-image');
    this.style.backgroundImage = bgImage;
    this.removeAttribute('data-bg-image');
  });
}
var slides2 = document.querySelectorAll('.swiper-slide');

for (var i = 0; i < slides2.length; i++) {
  var slide = slides2[i];
  var bgImage = slide.style.backgroundImage;
  slide.setAttribute('data-bg-image', bgImage);
  
  slide.addEventListener('mouseover', function() {
    var hoverImage = this.getAttribute('data-hover-image');
    this.style.backgroundImage = 'url(' + hoverImage + ')';
  });
  
  slide.addEventListener('mouseout', function() {
    var bgImage = this.getAttribute('data-bg-image');
    this.style.backgroundImage = bgImage;
  });
}









