'use strict';

import Swiper from 'swiper';
// import gsap from 'gsap';
// import { debounce,mediaQuery } from './utils';

if (Swiper) {
    $(function () {
        // ---- ALL SLIDERS -----
        // const sliderMomentumRatio = 0.455;
        const IsInitialized = (ele) => ele.hasClass('swiper-container-initialized');
        const swiperInstances = {
            feature:              { instance: null, init: false },
        };

        // --------  FEATURE SLIDER --------

        const featureSlider = $('.features__slider');

        function setupFeatureSlider () {
            swiperInstances.feature.instance = new Swiper(featureSlider[0], { // eslint-disable-line
                slidesPerView: 'auto',
                spaceBetween: 30,
                freeMode: false,
                breakpoints: {
                    991: {
                        slidesPerView: 1,
                        spaceBetween: $(featureSlider).attr('data-type') === 'slider' ? 40 : 72,
                    }
                }
                // centeredSlides: true,
                // loop: true,
            });
        }

        if (featureSlider.length > 0) {
            if (!IsInitialized(featureSlider)) {
                setupFeatureSlider();
            }
        }
    });
}
