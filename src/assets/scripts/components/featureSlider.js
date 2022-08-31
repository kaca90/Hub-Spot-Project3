// 'use strict';

// import Swiper from 'swiper';
// // import gsap from 'gsap';
// // import { debounce,mediaQuery } from './utils';

// if (Swiper) {
//     $(function () {
//         // ---- ALL SLIDERS -----
//         const sliderMomentumRatio = 0.455;
//         const IsInitialized = (ele) => ele.hasClass('swiper-container-initialized');
//         const swiperInstances = {
//             feature:              { instance: null, init: false },
//         };

//         // --------  FEATURE SLIDER --------

//         const featureSlider = $('.features__slider');

//         function setupFeatureSlider () {
//             swiperInstances.feature.instance = new Swiper(featureSlider[0], { // eslint-disable-line
//                 slidesPerView: 1,
//                 spaceBetween: 20,
//                 freeMode: true,
//                 freeModeMomentumRatio: sliderMomentumRatio,
//                 loop: true,
//                 loopFillGroupWithBlank: false,
//                 dynamicBullets: true,
//                 pagination: {
//                     el: '.swiper-pagination',
//                     clickable: true,
//                 },
//                 navigation: {
//                     nextEl: '.features__slider__nav-next',
//                     prevEl: '.features__slider__nav-prev',
//                 },
//                 // breakpoints: {
//                 //     // when window width is >=
//                 //     992: {
//                 //         slidesPerView: 5,
//                 //     },
//                 //     768: {
//                 //         slidesPerView: 3,
//                 //     },
//                 //     576: {
//                 //         slidesPerView: 2,
//                 //     }
//                 // },
//                 breakpoints: {
//                     // when window width is >=
//                     1280: {
//                         slidesPerView: 5,
//                         spaceBetween: 20,
//                     },
//                     992: {
//                         slidesPerView: 3,
//                     },
//                     456: {
//                         slidesPerView: 2,
//                     }
//                 },
//             });
//         }

//         if (featureSlider.length > 0) {
//             if (!IsInitialized(featureSlider)) {
//                 setupFeatureSlider();
//             }
//         }
//     });
// }
