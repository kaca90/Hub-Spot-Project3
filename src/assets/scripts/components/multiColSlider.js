'use strict';

import Swiper from 'swiper';
// import gsap from 'gsap';
// import { debounce,mediaQuery } from './utils';

if (Swiper) {
    $(function () {
        // ---- ALL SLIDERS -----
        const sliderMomentumRatio = 0.455;
        const IsInitialized = (ele) => ele.classList.contains('swiper-container-initialized');
        const swiperInstances = {
            multiCol:              { instance: null, init: false },
        };

        // -------- multiCol SLIDER --------

        const multiColSlider = document.querySelectorAll('.multi-column__slider');

        function setupMultiColSlider () {
            multiColSlider.forEach(element => {
                if (!IsInitialized(element)) {
                    swiperInstances.multiCol.instance = new Swiper(element, { // eslint-disable-line
                        slidesPerView: 'auto',
                        spaceBetween: 20,
                        freeMode: true,
                        freeModeMomentumRatio: sliderMomentumRatio,
                        loop: true,
                        loopFillGroupWithBlank: true,
                        dynamicBullets: true,
                        breakpoints: {
                            // when window width is >=
                            992: {
                                slidesPerView: 5,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            576: {
                                slidesPerView: 2,
                            }
                        },
                    });
                }
            });
        }

        if (multiColSlider.length > 0) {
            // if (!IsInitialized(multiColSlider)) {
            setupMultiColSlider();
            // }
        }
    });
}
