const video = document.querySelector('video');
const icon = document.querySelector('.icon');
const videoContainer = document.querySelector('.video__container');
const menuBtn = document.querySelector('.menu__btn');
const navUl = document.querySelector('.nav__ul')


videoContainer.addEventListener('click', ()=> {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

video.addEventListener('play', ()=> {
    icon.classList.add('muted');
})

video.addEventListener('pause', ()=> {
    icon.classList.remove('muted');
})

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    autoplay: {
        delay: 3000,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        },
        // when window width is >= 480px
        660: {
          slidesPerView: 2,
        },
        // when window width is >= 640px
        1000: {
          slidesPerView: 3,
        }
      }
});

menuBtn.addEventListener('click', () => {
    navUl.classList.toggle('menu--open');
    menuBtn.classList.toggle('btn--pos')
});