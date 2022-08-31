/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets sync recursive \\.(svg|png|jpe?g)$":
/*!********************************************!*\
  !*** ./src/assets sync \.(svg|png|jpe?g)$ ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./images/svg/newsletter.svg": "./src/assets/images/svg/newsletter.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets sync recursive \\.(svg|png|jpe?g)$";

/***/ }),

/***/ "./src/assets/images/svg/newsletter.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/svg/newsletter.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "../images/svg/newsletter.svg";

/***/ }),

/***/ "./src/assets/scripts/components sync recursive ^\\.\\/.*\\.js$":
/*!*********************************************************!*\
  !*** ./src/assets/scripts/components sync ^\.\/.*\.js$ ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./featureSlider.js": "./src/assets/scripts/components/featureSlider.js",
	"./header.js": "./src/assets/scripts/components/header.js",
	"./helpers.js": "./src/assets/scripts/components/helpers.js",
	"./lazyimageloader.js": "./src/assets/scripts/components/lazyimageloader.js",
	"./multiColSlider.js": "./src/assets/scripts/components/multiColSlider.js",
	"./postsSlider.js": "./src/assets/scripts/components/postsSlider.js",
	"./resource.js": "./src/assets/scripts/components/resource.js",
	"./slider.js": "./src/assets/scripts/components/slider.js",
	"./utils.js": "./src/assets/scripts/components/utils.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/scripts/components sync recursive ^\\.\\/.*\\.js$";

/***/ }),

/***/ "./src/assets/scripts/components/featureSlider.js":
/*!********************************************************!*\
  !*** ./src/assets/scripts/components/featureSlider.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/assets/scripts/components/header.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/components/header.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

$(document).ready(function () {
  var header = document.querySelector('header');
  var main = document.querySelector('main');
  var hamburger = $('.header__hamburger');
  var headerClose = $('.sidebar__close');
  var sidebar = $('.sidebar');
  var sidebarContent = $('.sidebar__content');
  var itemWithChildren = $('.sidebar .hs-item-has-children');

  if (header && main) {
    main.style.paddingTop = header.offsetHeight + 'px';
  }

  if (hamburger.length && headerClose.length && sidebar.length) {
    $(hamburger).click(function () {
      $(sidebar).addClass('active');
    });
    $(headerClose).click(function () {
      $(sidebar).removeClass('active');
    });
    $(sidebar).click(function () {
      $(this).removeClass('active');
    });
    $(sidebarContent).click(function (e) {
      e.stopPropagation();
    });
  }

  if (itemWithChildren.length > 0) {
    $(itemWithChildren).click(function () {
      $(this).toggleClass('open');
    });
  }

  var backgroundColor = $('#background-color-hidden').val();
  var scrollPos = 0;
  $(document).scroll(function () {
    scrollPos = $(this).scrollTop();

    if (scrollPos > 100) {
      $('.header').css('background-color', backgroundColor);
    } else {
      $('.header').css('background-color', 'transparent');
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/assets/scripts/components/helpers.js":
/*!**************************************************!*\
  !*** ./src/assets/scripts/components/helpers.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


var doImagePreload = function doImagePreload(url) {
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.srcset = url;
    image.onload = resolve;
    image.onerror = reject;
  });
};

var clamp = function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
};

var assert = function assert(predicate, message) {
  if (predicate) {
    return;
  }

  throw new Error(message);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  assert: assert,
  clamp: clamp,
  doImagePreload: doImagePreload
});

/***/ }),

/***/ "./src/assets/scripts/components/lazyimageloader.js":
/*!**********************************************************!*\
  !*** ./src/assets/scripts/components/lazyimageloader.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/assets/scripts/components/helpers.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var LazyImageLoader = /*#__PURE__*/function () {
  function LazyImageLoader() {
    var _this = this;

    _classCallCheck(this, LazyImageLoader);

    var images = document.querySelectorAll(".".concat(LazyImageLoader.PENDING_CLASS));
    var config = {
      root: null,
      rootMargin: '60px 0px',
      threshold: LazyImageLoader.THRESHOLD
    };

    if (!LazyImageLoader.OBSERVER_SUPPORTED) {
      this.llLoadImagesDefault(images);
      return;
    }

    this.llCount = images.length;
    this.llIntersected = this.llIntersected.bind(this);
    this.llObserver = new IntersectionObserver(this.llIntersected, config);
    images.forEach(function (image) {
      if (image.classList.contains(LazyImageLoader.HANDLED_CLASS)) {
        return;
      }

      _this.llObserver.observe(image);
    });
  }

  _createClass(LazyImageLoader, [{
    key: "llDisconnect",
    value: function llDisconnect() {
      if (!this.llObserver) {
        return;
      }

      this.llObserver.disconnect();
    }
  }, {
    key: "llIntersected",
    value: function llIntersected(entries) {
      var _this2 = this;

      entries.forEach(function (entry) {
        if (entry.intersectionRatio < 0) {
          return;
        }

        if (entry.isIntersecting) {
          _this2.llCount--;

          _this2.llPreloadImage(entry.target);

          _this2.llObserver.unobserve(entry.target);
        }
      });

      if (this.llCount > 0) {
        return;
      }

      this.llObserver.disconnect();
    }
  }, {
    key: "llPreloadImage",
    value: function llPreloadImage(image) {
      var _this3 = this;

      var src = image.dataset.srcset;

      if (!src) {
        return;
      }

      return _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].doImagePreload(src).then(function () {
        return _this3.llTagImage(image, src);
      });
    }
  }, {
    key: "llLoadImagesDefault",
    value: function llLoadImagesDefault(images) {
      var _this4 = this;

      Array.from(images).forEach(function (image) {
        return _this4.llPreloadImage(image);
      });
    }
  }, {
    key: "llTagImage",
    value: function llTagImage(img, src) {
      var el = img.querySelector('.lazy-image__content');

      if (!el) {
        return;
      }

      if (!img) {
        return;
      }

      var newImg = new Image();
      newImg.classList.add(LazyImageLoader.LOADED_CLASS);
      newImg.srcset = src;
      newImg.classList.add(LazyImageLoader.REVEAL_CLASS);
      newImg.alt = el.alt;
      img.appendChild(newImg);
      img.dataset.srcset = '';
      img.classList.remove(LazyImageLoader.PENDING_CLASS);
      img.classList.add(LazyImageLoader.HANDLED_CLASS);
    }
  }], [{
    key: "OBSERVER_SUPPORTED",
    get: function get() {
      return 'IntersectionObserver' in window;
    }
  }, {
    key: "PENDING_CLASS",
    get: function get() {
      return 'lazy-image--pending';
    }
  }, {
    key: "HANDLED_CLASS",
    get: function get() {
      return 'lazy-image--loaded';
    }
  }, {
    key: "LOADED_CLASS",
    get: function get() {
      return 'lazy-image__actual';
    }
  }, {
    key: "REVEAL_CLASS",
    get: function get() {
      return 'fade-in';
    }
  }, {
    key: "THRESHOLD",
    get: function get() {
      return 0.1;
    }
  }, {
    key: "init",
    value: function init() {
      if (this.llInstance) {
        this.llInstance.llDisconnect();
      }

      this.llCount = 0;
      this.llInstance = new LazyImageLoader();
    }
  }]);

  return LazyImageLoader;
}();

/* harmony default export */ __webpack_exports__["default"] = (LazyImageLoader);

/***/ }),

/***/ "./src/assets/scripts/components/multiColSlider.js":
/*!*********************************************************!*\
  !*** ./src/assets/scripts/components/multiColSlider.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "swiper");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_0__);


 // import gsap from 'gsap';
// import { debounce,mediaQuery } from './utils';

if (swiper__WEBPACK_IMPORTED_MODULE_0___default.a) {
  $(function () {
    // ---- ALL SLIDERS -----
    var sliderMomentumRatio = 0.455;

    var IsInitialized = function IsInitialized(ele) {
      return ele.classList.contains('swiper-container-initialized');
    };

    var swiperInstances = {
      multiCol: {
        instance: null,
        init: false
      }
    }; // -------- multiCol SLIDER --------

    var multiColSlider = document.querySelectorAll('.multi-column__slider');

    function setupMultiColSlider() {
      multiColSlider.forEach(function (element) {
        if (!IsInitialized(element)) {
          swiperInstances.multiCol.instance = new swiper__WEBPACK_IMPORTED_MODULE_0___default.a(element, {
            // eslint-disable-line
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
                slidesPerView: 5
              },
              768: {
                slidesPerView: 3
              },
              576: {
                slidesPerView: 2
              }
            }
          });
        }
      });
    }

    if (multiColSlider.length > 0) {
      // if (!IsInitialized(multiColSlider)) {
      setupMultiColSlider(); // }
    }
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/assets/scripts/components/postsSlider.js":
/*!******************************************************!*\
  !*** ./src/assets/scripts/components/postsSlider.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "swiper");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_0__);


 // import gsap from 'gsap';
// import { debounce,mediaQuery } from './utils';

if (swiper__WEBPACK_IMPORTED_MODULE_0___default.a) {
  $(function () {
    // ---- ALL SLIDERS -----
    var sliderMomentumRatio = 0.455;

    var IsInitialized = function IsInitialized(ele) {
      return ele.classList.contains('swiper-container-initialized');
    };

    var swiperInstances = {
      posts: {
        instance: null,
        init: false
      },
      grid: {
        instance: null,
        init: false
      },
      feature: {
        instance: null,
        init: false
      }
    }; // -------- POSTS SLIDER --------

    var postsSlider = document.querySelectorAll('.blog-posts__posts-slider');

    function setupPostsSlider() {
      postsSlider.forEach(function (element) {
        if (!IsInitialized(element)) {
          swiperInstances.posts.instance = new swiper__WEBPACK_IMPORTED_MODULE_0___default.a(element, {
            // eslint-disable-line
            slidesPerView: 1,
            spaceBetween: 20,
            freeMode: true,
            freeModeMomentumRatio: sliderMomentumRatio,
            loop: true,
            loopFillGroupWithBlank: true,
            dynamicBullets: true,
            breakpoints: {
              // when window width is >=
              992: {
                slidesPerView: 5
              },
              768: {
                slidesPerView: 3
              },
              576: {
                slidesPerView: 2
              }
            }
          });
        }
      });
    }

    if (postsSlider.length > 0) {
      // if (!IsInitialized(postsSlider)) {
      setupPostsSlider(); // }
    } // --- GRID SLIDER ----


    var gridSlider = document.querySelectorAll('.blog-posts__grid-slider');

    function setupGridSlider() {
      gridSlider.forEach(function (element) {
        if (!IsInitialized(element)) {
          swiperInstances.posts.instance = new swiper__WEBPACK_IMPORTED_MODULE_0___default.a(element, {
            // eslint-disable-line
            slidesPerView: 1,
            spaceBetween: 20,
            freeMode: true,
            freeModeMomentumRatio: sliderMomentumRatio,
            loop: true,
            loopFillGroupWithBlank: true,
            dynamicBullets: true,
            breakpoints: {
              // when window width is >=
              992: {
                slidesPerView: 5
              },
              768: {
                slidesPerView: 3
              },
              576: {
                slidesPerView: 2
              }
            }
          });
        }
      });
    }

    if (gridSlider.length > 0) {
      // if (!IsInitialized(postsSlider)) {
      setupGridSlider(); // }
    } // --- GRID SLIDER ----


    var featureSlider = document.querySelectorAll('.blog-posts__grid-feature-slider');

    function setupFeatureSlider() {
      featureSlider.forEach(function (element) {
        if (!IsInitialized(element)) {
          swiperInstances.posts.instance = new swiper__WEBPACK_IMPORTED_MODULE_0___default.a(element, {
            // eslint-disable-line
            slidesPerView: 1,
            spaceBetween: 20,
            freeMode: true,
            freeModeMomentumRatio: sliderMomentumRatio,
            loop: true,
            loopFillGroupWithBlank: false,
            dynamicBullets: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            navigation: {
              nextEl: '.features__slider__nav-next',
              prevEl: '.features__slider__nav-prev'
            },
            breakpoints: {
              // when window width is >=
              992: {
                slidesPerView: 5
              },
              768: {
                slidesPerView: 3
              },
              576: {
                slidesPerView: 2
              }
            }
          });
        }
      });
    }

    if (featureSlider.length > 0) {
      // if (!IsInitialized(postsSlider)) {
      setupFeatureSlider(); // }
    }
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/assets/scripts/components/resource.js":
/*!***************************************************!*\
  !*** ./src/assets/scripts/components/resource.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_0__);




if (gsap__WEBPACK_IMPORTED_MODULE_0___default.a) {
  $(function () {
    var resource = $('.resource'); // let swap = false;

    if (resource.length > 0) {// const changeClasses = () => {
      //     let red = $('.resource__block-red')[0];
      //     let black = $('.resource__block-black')[0];
      //     if (!swap) {
      //         red.classList.add('swap');
      //         black.classList.add('swap');
      //     } else {
      //         red.classList.remove('swap');
      //         black.classList.remove('swap');
      //     }
      //     swap = !swap;
      // }
      // ScrollTrigger.create({
      //     target: '.resource__block',
      //     start: 'top top',
      //     markers: true,
      //     // end: document.innerHeight,
      //     onToggle: () => changeClasses(),
      // });
    }
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/assets/scripts/components/slider.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/components/slider.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "swiper");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_0__);


 // import gsap from 'gsap';
// import { debounce,mediaQuery } from './utils';

if (swiper__WEBPACK_IMPORTED_MODULE_0___default.a) {
  $(function () {
    // ---- ALL SLIDERS -----
    // const sliderMomentumRatio = 0.455;
    var IsInitialized = function IsInitialized(ele) {
      return ele.hasClass('swiper-container-initialized');
    };

    var swiperInstances = {
      socialProof: {
        instance: null,
        init: false
      }
    }; // --------  SOCIAL PROOF SLIDER --------

    var socialSlider = $('.social-proof__slider');

    function setupSocialSlider() {
      swiperInstances.socialProof.instance = new swiper__WEBPACK_IMPORTED_MODULE_0___default.a(socialSlider[0], {
        // eslint-disable-line
        slidesPerView: 'auto',
        spaceBetween: 30,
        freeMode: false,
        breakpoints: {
          991: {
            slidesPerView: 6,
            spaceBetween: $(socialSlider).attr('data-type') === 'circle' ? 40 : 72
          }
        } // centeredSlides: true,
        // loop: true,

      });
    }

    if (socialSlider.length > 0) {
      if (!IsInitialized(socialSlider)) {
        setupSocialSlider();
      }
    }
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/assets/scripts/components/utils.js":
/*!************************************************!*\
  !*** ./src/assets/scripts/components/utils.js ***!
  \************************************************/
/*! exports provided: debounce, throttle, lerp, clamp, irandom, seconds, mediaQuery, stbScrollTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "irandom", function() { return irandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seconds", function() { return seconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaQuery", function() { return mediaQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stbScrollTo", function() { return stbScrollTo; });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_0__);



var debounce = function debounce(func, wait, immediate) {
  var timeout;

  if (typeof func !== 'undefined') {
    return function () {
      var context = this;
      var args = arguments;

      var later = function later() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  } else {
    console.warn('A function is undefined! Debounce might not work as intended: ', func);
  }
};
var throttle = function throttle(func, limit) {
  var lastFunc;
  var lastRan;

  if (typeof func !== 'undefined') {
    return function () {
      var context = this;
      var args = arguments;

      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function () {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  } else {
    console.warn('A function is undefined! Throttle might not work as intended: ', func);
  }
};
var lerp = function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
};
var clamp = function clamp(min, val, max) {
  return Math.min(Math.max(val, min), max);
};
var irandom = function irandom(max) {
  return Math.floor(Math.random() * Math.floor(max));
};
var seconds = function seconds(ms) {
  return ms * 1000;
};
var mediaQuery = function mediaQuery(query) {
  return window.matchMedia(query).matches;
};
var stbScrollTo = function stbScrollTo(ele) {
  var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

  if (gsap__WEBPACK_IMPORTED_MODULE_0___default.a) {
    gsap__WEBPACK_IMPORTED_MODULE_0___default.a.registerPlugin(ScrollToPlugin); // eslint-disable-line

    gsap__WEBPACK_IMPORTED_MODULE_0___default.a.to(window, {
      duration: speed / 1000,
      ease: 'Power3.easeOut',
      scrollTo: {
        y: $(ele).offset().top
      }
    });
  } else {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(ele).offset().top
    }, speed);
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/assets/styles/main.scss":
/*!*************************************!*\
  !*** ./src/assets/styles/main.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // ---------- Image / css assets ------------

__webpack_require__("./src/assets sync recursive \\.(svg|png|jpe?g)$");

__webpack_require__(/*! ./assets/styles/main.scss */ "./src/assets/styles/main.scss");

var includeComponent = function includeComponent(script) {
  return __webpack_require__("./src/assets/scripts/components sync recursive ^\\.\\/.*\\.js$")("./".concat(script, ".js"));
}; // -------------- Lazy load -----------------

/*
 * import LazyImageLoader from './assets/scripts/components/lazyimageloader.js';
 * LazyImageLoader.init();
 */
// ----------- Custom scripts ---------------


includeComponent('slider');
includeComponent('header');
includeComponent('postsSlider');
includeComponent('multiColSlider');
includeComponent('featureSlider');

/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = gsap;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ "swiper":
/*!*************************!*\
  !*** external "Swiper" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Swiper;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cyBzeW5jIFxcLihzdmd8cG5nfGpwZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zdmcvbmV3c2xldHRlci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMgc3luYyBeXFwuXFwvLipcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvZmVhdHVyZVNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9sYXp5aW1hZ2Vsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbXVsdGlDb2xTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvcG9zdHNTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvcmVzb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3NhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlN3aXBlclwiIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiaGVhZGVyIiwicXVlcnlTZWxlY3RvciIsIm1haW4iLCJoYW1idXJnZXIiLCJoZWFkZXJDbG9zZSIsInNpZGViYXIiLCJzaWRlYmFyQ29udGVudCIsIml0ZW1XaXRoQ2hpbGRyZW4iLCJzdHlsZSIsInBhZGRpbmdUb3AiLCJvZmZzZXRIZWlnaHQiLCJsZW5ndGgiLCJjbGljayIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlQ2xhc3MiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ2YWwiLCJzY3JvbGxQb3MiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJjc3MiLCJkb0ltYWdlUHJlbG9hZCIsInVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW1hZ2UiLCJJbWFnZSIsInNyY3NldCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJjbGFtcCIsInZhbHVlIiwibWluIiwibWF4IiwiTWF0aCIsImFzc2VydCIsInByZWRpY2F0ZSIsIm1lc3NhZ2UiLCJFcnJvciIsIkxhenlJbWFnZUxvYWRlciIsImltYWdlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJQRU5ESU5HX0NMQVNTIiwiY29uZmlnIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJUSFJFU0hPTEQiLCJPQlNFUlZFUl9TVVBQT1JURUQiLCJsbExvYWRJbWFnZXNEZWZhdWx0IiwibGxDb3VudCIsImxsSW50ZXJzZWN0ZWQiLCJiaW5kIiwibGxPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiSEFORExFRF9DTEFTUyIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwiZW50cmllcyIsImVudHJ5IiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJpc0ludGVyc2VjdGluZyIsImxsUHJlbG9hZEltYWdlIiwidGFyZ2V0IiwidW5vYnNlcnZlIiwic3JjIiwiZGF0YXNldCIsIkhlbHBlcnMiLCJ0aGVuIiwibGxUYWdJbWFnZSIsIkFycmF5IiwiZnJvbSIsImltZyIsImVsIiwibmV3SW1nIiwiYWRkIiwiTE9BREVEX0NMQVNTIiwiUkVWRUFMX0NMQVNTIiwiYWx0IiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmUiLCJ3aW5kb3ciLCJsbEluc3RhbmNlIiwibGxEaXNjb25uZWN0IiwiU3dpcGVyIiwic2xpZGVyTW9tZW50dW1SYXRpbyIsIklzSW5pdGlhbGl6ZWQiLCJlbGUiLCJzd2lwZXJJbnN0YW5jZXMiLCJtdWx0aUNvbCIsImluc3RhbmNlIiwiaW5pdCIsIm11bHRpQ29sU2xpZGVyIiwic2V0dXBNdWx0aUNvbFNsaWRlciIsImVsZW1lbnQiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwiZnJlZU1vZGUiLCJmcmVlTW9kZU1vbWVudHVtUmF0aW8iLCJsb29wIiwibG9vcEZpbGxHcm91cFdpdGhCbGFuayIsImR5bmFtaWNCdWxsZXRzIiwiYnJlYWtwb2ludHMiLCJwb3N0cyIsImdyaWQiLCJmZWF0dXJlIiwicG9zdHNTbGlkZXIiLCJzZXR1cFBvc3RzU2xpZGVyIiwiZ3JpZFNsaWRlciIsInNldHVwR3JpZFNsaWRlciIsImZlYXR1cmVTbGlkZXIiLCJzZXR1cEZlYXR1cmVTbGlkZXIiLCJwYWdpbmF0aW9uIiwiY2xpY2thYmxlIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImdzYXAiLCJyZXNvdXJjZSIsImhhc0NsYXNzIiwic29jaWFsUHJvb2YiLCJzb2NpYWxTbGlkZXIiLCJzZXR1cFNvY2lhbFNsaWRlciIsImF0dHIiLCJkZWJvdW5jZSIsImZ1bmMiLCJ3YWl0IiwiaW1tZWRpYXRlIiwidGltZW91dCIsImNvbnRleHQiLCJhcmdzIiwiYXJndW1lbnRzIiwibGF0ZXIiLCJhcHBseSIsImNhbGxOb3ciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsIndhcm4iLCJ0aHJvdHRsZSIsImxpbWl0IiwibGFzdEZ1bmMiLCJsYXN0UmFuIiwiRGF0ZSIsIm5vdyIsImxlcnAiLCJzdGFydCIsImVuZCIsImFtdCIsImlyYW5kb20iLCJmbG9vciIsInJhbmRvbSIsInNlY29uZHMiLCJtcyIsIm1lZGlhUXVlcnkiLCJxdWVyeSIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwic3RiU2Nyb2xsVG8iLCJzcGVlZCIsInJlZ2lzdGVyUGx1Z2luIiwiU2Nyb2xsVG9QbHVnaW4iLCJ0byIsImR1cmF0aW9uIiwiZWFzZSIsInNjcm9sbFRvIiwieSIsIm9mZnNldCIsInRvcCIsImRvY3VtZW50RWxlbWVudCIsImJvZHkiLCJhbmltYXRlIiwicmVxdWlyZSIsImluY2x1ZGVDb21wb25lbnQiLCJzY3JpcHQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vaW1hZ2VzL3N2Zy9uZXdzbGV0dGVyLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3ZnL25ld3NsZXR0ZXIuc3ZnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihzdmd8cG5nfGpwZT9nKSRcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vaW1hZ2VzL3N2Zy9uZXdzbGV0dGVyLnN2Z1wiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9mZWF0dXJlU2xpZGVyLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9mZWF0dXJlU2xpZGVyLmpzXCIsXG5cdFwiLi9oZWFkZXIuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2hlYWRlci5qc1wiLFxuXHRcIi4vaGVscGVycy5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvaGVscGVycy5qc1wiLFxuXHRcIi4vbGF6eWltYWdlbG9hZGVyLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9sYXp5aW1hZ2Vsb2FkZXIuanNcIixcblx0XCIuL211bHRpQ29sU2xpZGVyLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9tdWx0aUNvbFNsaWRlci5qc1wiLFxuXHRcIi4vcG9zdHNTbGlkZXIuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3Bvc3RzU2xpZGVyLmpzXCIsXG5cdFwiLi9yZXNvdXJjZS5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvcmVzb3VyY2UuanNcIixcblx0XCIuL3NsaWRlci5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvc2xpZGVyLmpzXCIsXG5cdFwiLi91dGlscy5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvdXRpbHMuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5qcyRcIjsiLCIvLyAndXNlIHN0cmljdCc7XHJcblxyXG4vLyBpbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XHJcbi8vIC8vIGltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xyXG4vLyAvLyBpbXBvcnQgeyBkZWJvdW5jZSxtZWRpYVF1ZXJ5IH0gZnJvbSAnLi91dGlscyc7XHJcblxyXG4vLyBpZiAoU3dpcGVyKSB7XHJcbi8vICAgICAkKGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICAvLyAtLS0tIEFMTCBTTElERVJTIC0tLS0tXHJcbi8vICAgICAgICAgY29uc3Qgc2xpZGVyTW9tZW50dW1SYXRpbyA9IDAuNDU1O1xyXG4vLyAgICAgICAgIGNvbnN0IElzSW5pdGlhbGl6ZWQgPSAoZWxlKSA9PiBlbGUuaGFzQ2xhc3MoJ3N3aXBlci1jb250YWluZXItaW5pdGlhbGl6ZWQnKTtcclxuLy8gICAgICAgICBjb25zdCBzd2lwZXJJbnN0YW5jZXMgPSB7XHJcbi8vICAgICAgICAgICAgIGZlYXR1cmU6ICAgICAgICAgICAgICB7IGluc3RhbmNlOiBudWxsLCBpbml0OiBmYWxzZSB9LFxyXG4vLyAgICAgICAgIH07XHJcblxyXG4vLyAgICAgICAgIC8vIC0tLS0tLS0tICBGRUFUVVJFIFNMSURFUiAtLS0tLS0tLVxyXG5cclxuLy8gICAgICAgICBjb25zdCBmZWF0dXJlU2xpZGVyID0gJCgnLmZlYXR1cmVzX19zbGlkZXInKTtcclxuXHJcbi8vICAgICAgICAgZnVuY3Rpb24gc2V0dXBGZWF0dXJlU2xpZGVyICgpIHtcclxuLy8gICAgICAgICAgICAgc3dpcGVySW5zdGFuY2VzLmZlYXR1cmUuaW5zdGFuY2UgPSBuZXcgU3dpcGVyKGZlYXR1cmVTbGlkZXJbMF0sIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4vLyAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuLy8gICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbi8vICAgICAgICAgICAgICAgICBmcmVlTW9kZTogdHJ1ZSxcclxuLy8gICAgICAgICAgICAgICAgIGZyZWVNb2RlTW9tZW50dW1SYXRpbzogc2xpZGVyTW9tZW50dW1SYXRpbyxcclxuLy8gICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbi8vICAgICAgICAgICAgICAgICBsb29wRmlsbEdyb3VwV2l0aEJsYW5rOiBmYWxzZSxcclxuLy8gICAgICAgICAgICAgICAgIGR5bmFtaWNCdWxsZXRzOiB0cnVlLFxyXG4vLyAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuLy8gICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbi8vICAgICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG5leHRFbDogJy5mZWF0dXJlc19fc2xpZGVyX19uYXYtbmV4dCcsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgcHJldkVsOiAnLmZlYXR1cmVzX19zbGlkZXJfX25hdi1wcmV2JyxcclxuLy8gICAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgICAgICAvLyBicmVha3BvaW50czoge1xyXG4vLyAgICAgICAgICAgICAgICAgLy8gICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49XHJcbi8vICAgICAgICAgICAgICAgICAvLyAgICAgOTkyOiB7XHJcbi8vICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHNsaWRlc1BlclZpZXc6IDUsXHJcbi8vICAgICAgICAgICAgICAgICAvLyAgICAgfSxcclxuLy8gICAgICAgICAgICAgICAgIC8vICAgICA3Njg6IHtcclxuLy8gICAgICAgICAgICAgICAgIC8vICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuLy8gICAgICAgICAgICAgICAgIC8vICAgICB9LFxyXG4vLyAgICAgICAgICAgICAgICAgLy8gICAgIDU3Njoge1xyXG4vLyAgICAgICAgICAgICAgICAgLy8gICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4vLyAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIC8vIH0sXHJcbi8vICAgICAgICAgICAgICAgICBicmVha3BvaW50czoge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49XHJcbi8vICAgICAgICAgICAgICAgICAgICAgMTI4MDoge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA1LFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgICAgICAgICAgOTkyOiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgICAgICAgICA0NTY6IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIGlmIChmZWF0dXJlU2xpZGVyLmxlbmd0aCA+IDApIHtcclxuLy8gICAgICAgICAgICAgaWYgKCFJc0luaXRpYWxpemVkKGZlYXR1cmVTbGlkZXIpKSB7XHJcbi8vICAgICAgICAgICAgICAgICBzZXR1cEZlYXR1cmVTbGlkZXIoKTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0pO1xyXG4vLyB9XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuICAgIGNvbnN0IGhhbWJ1cmdlciA9ICQoJy5oZWFkZXJfX2hhbWJ1cmdlcicpO1xyXG4gICAgY29uc3QgaGVhZGVyQ2xvc2UgPSAkKCcuc2lkZWJhcl9fY2xvc2UnKTtcclxuICAgIGNvbnN0IHNpZGViYXIgPSAkKCcuc2lkZWJhcicpO1xyXG4gICAgY29uc3Qgc2lkZWJhckNvbnRlbnQgPSAkKCcuc2lkZWJhcl9fY29udGVudCcpO1xyXG4gICAgY29uc3QgaXRlbVdpdGhDaGlsZHJlbiA9ICQoJy5zaWRlYmFyIC5ocy1pdGVtLWhhcy1jaGlsZHJlbicpO1xyXG5cclxuICAgIGlmIChoZWFkZXIgJiYgbWFpbikge1xyXG4gICAgICAgIG1haW4uc3R5bGUucGFkZGluZ1RvcCA9IGhlYWRlci5vZmZzZXRIZWlnaHQgKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChoYW1idXJnZXIubGVuZ3RoICYmIGhlYWRlckNsb3NlLmxlbmd0aCAmJiBzaWRlYmFyLmxlbmd0aCkge1xyXG4gICAgICAgICQoaGFtYnVyZ2VyKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoc2lkZWJhcikuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKGhlYWRlckNsb3NlKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoc2lkZWJhcikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKHNpZGViYXIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoc2lkZWJhckNvbnRlbnQpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGl0ZW1XaXRoQ2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICQoaXRlbVdpdGhDaGlsZHJlbikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGJhY2tncm91bmRDb2xvciA9ICQoJyNiYWNrZ3JvdW5kLWNvbG9yLWhpZGRlbicpLnZhbCgpO1xyXG4gICAgbGV0IHNjcm9sbFBvcyA9IDA7XHJcbiAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNjcm9sbFBvcyA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgaWYgKHNjcm9sbFBvcyA+IDEwMCkge1xyXG4gICAgICAgICAgICAkKCcuaGVhZGVyJykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgYmFja2dyb3VuZENvbG9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuaGVhZGVyJykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgJ3RyYW5zcGFyZW50Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRvSW1hZ2VQcmVsb2FkID0gdXJsID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZS5zcmNzZXQgPSB1cmw7XG4gICAgICAgIGltYWdlLm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIGltYWdlLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgfSk7XG59O1xuXG5jb25zdCBjbGFtcCA9ICh2YWx1ZSwgbWluLCBtYXgpID0+IE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWx1ZSkpO1xuXG5jb25zdCBhc3NlcnQgPSAocHJlZGljYXRlLCBtZXNzYWdlKSA9PiB7XG4gICAgaWYgKHByZWRpY2F0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGFzc2VydCwgY2xhbXAsIGRvSW1hZ2VQcmVsb2FkXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgSGVscGVycyBmcm9tICcuL2hlbHBlcnMnO1xuXG5jbGFzcyBMYXp5SW1hZ2VMb2FkZXIge1xuICAgIHN0YXRpYyBnZXQgT0JTRVJWRVJfU1VQUE9SVEVEICgpIHtcbiAgICAgICAgcmV0dXJuICgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBQRU5ESU5HX0NMQVNTICgpIHtcbiAgICAgICAgcmV0dXJuICdsYXp5LWltYWdlLS1wZW5kaW5nJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IEhBTkRMRURfQ0xBU1MgKCkge1xuICAgICAgICByZXR1cm4gJ2xhenktaW1hZ2UtLWxvYWRlZCc7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBMT0FERURfQ0xBU1MgKCkge1xuICAgICAgICByZXR1cm4gJ2xhenktaW1hZ2VfX2FjdHVhbCc7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBSRVZFQUxfQ0xBU1MgKCkge1xuICAgICAgICByZXR1cm4gJ2ZhZGUtaW4nO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgVEhSRVNIT0xEICgpIHtcbiAgICAgICAgcmV0dXJuIDAuMTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5pdCAoKSB7XG4gICAgICAgIGlmICh0aGlzLmxsSW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMubGxJbnN0YW5jZS5sbERpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGxDb3VudCA9IDA7XG4gICAgICAgIHRoaXMubGxJbnN0YW5jZSA9IG5ldyBMYXp5SW1hZ2VMb2FkZXIoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHZhciBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtMYXp5SW1hZ2VMb2FkZXIuUEVORElOR19DTEFTU31gKTtcbiAgICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAgICAgcm9vdDogbnVsbCxcbiAgICAgICAgICAgIHJvb3RNYXJnaW46ICc2MHB4IDBweCcsXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IExhenlJbWFnZUxvYWRlci5USFJFU0hPTERcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIUxhenlJbWFnZUxvYWRlci5PQlNFUlZFUl9TVVBQT1JURUQpIHtcbiAgICAgICAgICAgIHRoaXMubGxMb2FkSW1hZ2VzRGVmYXVsdChpbWFnZXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sbENvdW50ID0gaW1hZ2VzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5sbEludGVyc2VjdGVkID0gdGhpcy5sbEludGVyc2VjdGVkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubGxPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcih0aGlzLmxsSW50ZXJzZWN0ZWQsIGNvbmZpZyk7XG5cbiAgICAgICAgaW1hZ2VzLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgICAgICAgICAgaWYgKGltYWdlLmNsYXNzTGlzdC5jb250YWlucyhMYXp5SW1hZ2VMb2FkZXIuSEFORExFRF9DTEFTUykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubGxPYnNlcnZlci5vYnNlcnZlKGltYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGxEaXNjb25uZWN0ICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxsT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGxPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuXG4gICAgbGxJbnRlcnNlY3RlZCAoZW50cmllcykge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBpZiAoZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sbENvdW50LS07XG4gICAgICAgICAgICAgICAgdGhpcy5sbFByZWxvYWRJbWFnZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgIHRoaXMubGxPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMubGxDb3VudCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGxPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuXG4gICAgbGxQcmVsb2FkSW1hZ2UgKGltYWdlKSB7XG4gICAgICAgIGNvbnN0IHNyYyA9IGltYWdlLmRhdGFzZXQuc3Jjc2V0O1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEhlbHBlcnMuZG9JbWFnZVByZWxvYWQoc3JjKS50aGVuKCgpID0+IHRoaXMubGxUYWdJbWFnZShpbWFnZSwgc3JjKSk7XG4gICAgfVxuXG4gICAgbGxMb2FkSW1hZ2VzRGVmYXVsdCAoaW1hZ2VzKSB7XG4gICAgICAgIEFycmF5LmZyb20oaW1hZ2VzKS5mb3JFYWNoKGltYWdlID0+IHRoaXMubGxQcmVsb2FkSW1hZ2UoaW1hZ2UpKTtcbiAgICB9XG5cbiAgICBsbFRhZ0ltYWdlIChpbWcsIHNyYykge1xuICAgICAgICBjb25zdCBlbCA9IGltZy5xdWVyeVNlbGVjdG9yKCcubGF6eS1pbWFnZV9fY29udGVudCcpO1xuICAgICAgICBpZiAoIWVsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWltZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5ld0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBuZXdJbWcuY2xhc3NMaXN0LmFkZChMYXp5SW1hZ2VMb2FkZXIuTE9BREVEX0NMQVNTKTtcbiAgICAgICAgbmV3SW1nLnNyY3NldCA9IHNyYztcbiAgICAgICAgbmV3SW1nLmNsYXNzTGlzdC5hZGQoTGF6eUltYWdlTG9hZGVyLlJFVkVBTF9DTEFTUyk7XG4gICAgICAgIG5ld0ltZy5hbHQgPSBlbC5hbHQ7XG4gICAgICAgIGltZy5hcHBlbmRDaGlsZChuZXdJbWcpO1xuXG4gICAgICAgIGltZy5kYXRhc2V0LnNyY3NldCA9ICcnO1xuICAgICAgICBpbWcuY2xhc3NMaXN0LnJlbW92ZShMYXp5SW1hZ2VMb2FkZXIuUEVORElOR19DTEFTUyk7XG4gICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKExhenlJbWFnZUxvYWRlci5IQU5ETEVEX0NMQVNTKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExhenlJbWFnZUxvYWRlcjtcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcclxuLy8gaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XHJcbi8vIGltcG9ydCB7IGRlYm91bmNlLG1lZGlhUXVlcnkgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbmlmIChTd2lwZXIpIHtcclxuICAgICQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIC0tLS0gQUxMIFNMSURFUlMgLS0tLS1cclxuICAgICAgICBjb25zdCBzbGlkZXJNb21lbnR1bVJhdGlvID0gMC40NTU7XHJcbiAgICAgICAgY29uc3QgSXNJbml0aWFsaXplZCA9IChlbGUpID0+IGVsZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItaW5pdGlhbGl6ZWQnKTtcclxuICAgICAgICBjb25zdCBzd2lwZXJJbnN0YW5jZXMgPSB7XHJcbiAgICAgICAgICAgIG11bHRpQ29sOiAgICAgICAgICAgICAgeyBpbnN0YW5jZTogbnVsbCwgaW5pdDogZmFsc2UgfSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLSBtdWx0aUNvbCBTTElERVIgLS0tLS0tLS1cclxuXHJcbiAgICAgICAgY29uc3QgbXVsdGlDb2xTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubXVsdGktY29sdW1uX19zbGlkZXInKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0dXBNdWx0aUNvbFNsaWRlciAoKSB7XHJcbiAgICAgICAgICAgIG11bHRpQ29sU2xpZGVyLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUlzSW5pdGlhbGl6ZWQoZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2lwZXJJbnN0YW5jZXMubXVsdGlDb2wuaW5zdGFuY2UgPSBuZXcgU3dpcGVyKGVsZW1lbnQsIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyZWVNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmVlTW9kZU1vbWVudHVtUmF0aW86IHNsaWRlck1vbWVudHVtUmF0aW8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvb3BGaWxsR3JvdXBXaXRoQmxhbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR5bmFtaWNCdWxsZXRzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA1NzY6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtdWx0aUNvbFNsaWRlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIGlmICghSXNJbml0aWFsaXplZChtdWx0aUNvbFNsaWRlcikpIHtcclxuICAgICAgICAgICAgc2V0dXBNdWx0aUNvbFNsaWRlcigpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xyXG4vLyBpbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcclxuLy8gaW1wb3J0IHsgZGVib3VuY2UsbWVkaWFRdWVyeSB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuaWYgKFN3aXBlcikge1xyXG4gICAgJChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gLS0tLSBBTEwgU0xJREVSUyAtLS0tLVxyXG4gICAgICAgIGNvbnN0IHNsaWRlck1vbWVudHVtUmF0aW8gPSAwLjQ1NTtcclxuICAgICAgICBjb25zdCBJc0luaXRpYWxpemVkID0gKGVsZSkgPT4gZWxlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci1pbml0aWFsaXplZCcpO1xyXG4gICAgICAgIGNvbnN0IHN3aXBlckluc3RhbmNlcyA9IHtcclxuICAgICAgICAgICAgcG9zdHM6ICB7IGluc3RhbmNlOiBudWxsLCBpbml0OiBmYWxzZSB9LFxyXG4gICAgICAgICAgICBncmlkOiAgIHsgaW5zdGFuY2U6IG51bGwsIGluaXQ6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIGZlYXR1cmU6IHsgaW5zdGFuY2U6IG51bGwsIGluaXQ6IGZhbHNlIH0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0gUE9TVFMgU0xJREVSIC0tLS0tLS0tXHJcblxyXG4gICAgICAgIGNvbnN0IHBvc3RzU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsb2ctcG9zdHNfX3Bvc3RzLXNsaWRlcicpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXR1cFBvc3RzU2xpZGVyICgpIHtcclxuICAgICAgICAgICAgcG9zdHNTbGlkZXIuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghSXNJbml0aWFsaXplZChlbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXBlckluc3RhbmNlcy5wb3N0cy5pbnN0YW5jZSA9IG5ldyBTd2lwZXIoZWxlbWVudCwgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyZWVNb2RlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmVlTW9kZU1vbWVudHVtUmF0aW86IHNsaWRlck1vbWVudHVtUmF0aW8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvb3BGaWxsR3JvdXBXaXRoQmxhbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR5bmFtaWNCdWxsZXRzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA1NzY6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwb3N0c1NsaWRlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIGlmICghSXNJbml0aWFsaXplZChwb3N0c1NsaWRlcikpIHtcclxuICAgICAgICAgICAgc2V0dXBQb3N0c1NsaWRlcigpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAtLS0gR1JJRCBTTElERVIgLS0tLVxyXG4gICAgICAgIGNvbnN0IGdyaWRTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmxvZy1wb3N0c19fZ3JpZC1zbGlkZXInKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0dXBHcmlkU2xpZGVyICgpIHtcclxuICAgICAgICAgICAgZ3JpZFNsaWRlci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFJc0luaXRpYWxpemVkKGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVySW5zdGFuY2VzLnBvc3RzLmluc3RhbmNlID0gbmV3IFN3aXBlcihlbGVtZW50LCB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJlZU1vZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyZWVNb2RlTW9tZW50dW1SYXRpbzogc2xpZGVyTW9tZW50dW1SYXRpbyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9vcEZpbGxHcm91cFdpdGhCbGFuazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHluYW1pY0J1bGxldHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDU3Njoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGdyaWRTbGlkZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBpZiAoIUlzSW5pdGlhbGl6ZWQocG9zdHNTbGlkZXIpKSB7XHJcbiAgICAgICAgICAgIHNldHVwR3JpZFNsaWRlcigpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAtLS0gR1JJRCBTTElERVIgLS0tLVxyXG4gICAgICAgIGNvbnN0IGZlYXR1cmVTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmxvZy1wb3N0c19fZ3JpZC1mZWF0dXJlLXNsaWRlcicpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXR1cEZlYXR1cmVTbGlkZXIgKCkge1xyXG4gICAgICAgICAgICBmZWF0dXJlU2xpZGVyLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUlzSW5pdGlhbGl6ZWQoZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2lwZXJJbnN0YW5jZXMucG9zdHMuaW5zdGFuY2UgPSBuZXcgU3dpcGVyKGVsZW1lbnQsIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmVlTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJlZU1vZGVNb21lbnR1bVJhdGlvOiBzbGlkZXJNb21lbnR1bVJhdGlvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb29wRmlsbEdyb3VwV2l0aEJsYW5rOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHluYW1pY0J1bGxldHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEVsOiAnLmZlYXR1cmVzX19zbGlkZXJfX25hdi1uZXh0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZFbDogJy5mZWF0dXJlc19fc2xpZGVyX19uYXYtcHJldicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDU3Njoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZlYXR1cmVTbGlkZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBpZiAoIUlzSW5pdGlhbGl6ZWQocG9zdHNTbGlkZXIpKSB7XHJcbiAgICAgICAgICAgIHNldHVwRmVhdHVyZVNsaWRlcigpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcblxuaWYgKGdzYXApIHtcbiAgICAkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSAkKCcucmVzb3VyY2UnKTtcbiAgICAgICAgLy8gbGV0IHN3YXAgPSBmYWxzZTtcblxuICAgICAgICBpZiAocmVzb3VyY2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gY29uc3QgY2hhbmdlQ2xhc3NlcyA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBsZXQgcmVkID0gJCgnLnJlc291cmNlX19ibG9jay1yZWQnKVswXTtcbiAgICAgICAgICAgIC8vICAgICBsZXQgYmxhY2sgPSAkKCcucmVzb3VyY2VfX2Jsb2NrLWJsYWNrJylbMF07XG5cbiAgICAgICAgICAgIC8vICAgICBpZiAoIXN3YXApIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgcmVkLmNsYXNzTGlzdC5hZGQoJ3N3YXAnKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgYmxhY2suY2xhc3NMaXN0LmFkZCgnc3dhcCcpO1xuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHJlZC5jbGFzc0xpc3QucmVtb3ZlKCdzd2FwJyk7XG4gICAgICAgICAgICAvLyAgICAgICAgIGJsYWNrLmNsYXNzTGlzdC5yZW1vdmUoJ3N3YXAnKTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgc3dhcCA9ICFzd2FwO1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAvLyBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICAgICAgICAvLyAgICAgdGFyZ2V0OiAnLnJlc291cmNlX19ibG9jaycsXG4gICAgICAgICAgICAvLyAgICAgc3RhcnQ6ICd0b3AgdG9wJyxcbiAgICAgICAgICAgIC8vICAgICBtYXJrZXJzOiB0cnVlLFxuICAgICAgICAgICAgLy8gICAgIC8vIGVuZDogZG9jdW1lbnQuaW5uZXJIZWlnaHQsXG4gICAgICAgICAgICAvLyAgICAgb25Ub2dnbGU6ICgpID0+IGNoYW5nZUNsYXNzZXMoKSxcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcbi8vIGltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xuLy8gaW1wb3J0IHsgZGVib3VuY2UsbWVkaWFRdWVyeSB9IGZyb20gJy4vdXRpbHMnO1xuXG5pZiAoU3dpcGVyKSB7XG4gICAgJChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIC0tLS0gQUxMIFNMSURFUlMgLS0tLS1cbiAgICAgICAgLy8gY29uc3Qgc2xpZGVyTW9tZW50dW1SYXRpbyA9IDAuNDU1O1xuICAgICAgICBjb25zdCBJc0luaXRpYWxpemVkID0gKGVsZSkgPT4gZWxlLmhhc0NsYXNzKCdzd2lwZXItY29udGFpbmVyLWluaXRpYWxpemVkJyk7XG4gICAgICAgIGNvbnN0IHN3aXBlckluc3RhbmNlcyA9IHtcbiAgICAgICAgICAgIHNvY2lhbFByb29mOiAgICAgICAgICAgICAgeyBpbnN0YW5jZTogbnVsbCwgaW5pdDogZmFsc2UgfSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyAtLS0tLS0tLSAgU09DSUFMIFBST09GIFNMSURFUiAtLS0tLS0tLVxuXG4gICAgICAgIGNvbnN0IHNvY2lhbFNsaWRlciA9ICQoJy5zb2NpYWwtcHJvb2ZfX3NsaWRlcicpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHNldHVwU29jaWFsU2xpZGVyICgpIHtcbiAgICAgICAgICAgIHN3aXBlckluc3RhbmNlcy5zb2NpYWxQcm9vZi5pbnN0YW5jZSA9IG5ldyBTd2lwZXIoc29jaWFsU2xpZGVyWzBdLCB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgICAgICAgICAgICBmcmVlTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgICAgICAgICAgOTkxOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA2LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAkKHNvY2lhbFNsaWRlcikuYXR0cignZGF0YS10eXBlJykgPT09ICdjaXJjbGUnID8gNDAgOiA3MixcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyBsb29wOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc29jaWFsU2xpZGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmICghSXNJbml0aWFsaXplZChzb2NpYWxTbGlkZXIpKSB7XG4gICAgICAgICAgICAgICAgc2V0dXBTb2NpYWxTbGlkZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcblxuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkgPT4ge1xuICAgIHZhciB0aW1lb3V0O1xuICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgdmFyIGxhdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgICAgICAgICAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdBIGZ1bmN0aW9uIGlzIHVuZGVmaW5lZCEgRGVib3VuY2UgbWlnaHQgbm90IHdvcmsgYXMgaW50ZW5kZWQ6ICcsIGZ1bmMpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCB0aHJvdHRsZSA9IChmdW5jLCBsaW1pdCkgPT4ge1xuICAgIGxldCBsYXN0RnVuYztcbiAgICBsZXQgbGFzdFJhbjtcblxuICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgICAgICAgICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcblxuICAgICAgICAgICAgaWYgKCFsYXN0UmFuKSB7XG4gICAgICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICBsYXN0UmFuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGxhc3RGdW5jKTtcblxuICAgICAgICAgICAgICAgIGxhc3RGdW5jID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoRGF0ZS5ub3coKSAtIGxhc3RSYW4pID49IGxpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFJhbiA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBsaW1pdCAtIChEYXRlLm5vdygpIC0gbGFzdFJhbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybignQSBmdW5jdGlvbiBpcyB1bmRlZmluZWQhIFRocm90dGxlIG1pZ2h0IG5vdCB3b3JrIGFzIGludGVuZGVkOiAnLCBmdW5jKTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgbGVycCA9IChzdGFydCwgZW5kLCBhbXQpID0+IHtcbiAgICByZXR1cm4gKDEgLSBhbXQpICogc3RhcnQgKyBhbXQgKiBlbmQ7XG59O1xuXG5leHBvcnQgY29uc3QgY2xhbXAgPSAobWluLCB2YWwsIG1heCkgPT4ge1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWwsIG1pbiksIG1heCk7XG59O1xuXG5leHBvcnQgY29uc3QgaXJhbmRvbSA9IChtYXgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IobWF4KSk7XG5leHBvcnQgY29uc3Qgc2Vjb25kcyA9IChtcykgPT4gbXMgKiAxMDAwO1xuXG5leHBvcnQgY29uc3QgbWVkaWFRdWVyeSA9IChxdWVyeSkgPT4gKHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KSkubWF0Y2hlcztcblxuZXhwb3J0IGNvbnN0IHN0YlNjcm9sbFRvID0gKGVsZSwgc3BlZWQgPSAyMDApID0+IHtcbiAgICBpZiAoZ3NhcCkge1xuICAgICAgICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRvUGx1Z2luKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgICAgIGdzYXAudG8od2luZG93LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogc3BlZWQgLyAxMDAwLFxuICAgICAgICAgICAgZWFzZTogJ1Bvd2VyMy5lYXNlT3V0JyxcbiAgICAgICAgICAgIHNjcm9sbFRvOiB7XG4gICAgICAgICAgICAgICAgeTogJChlbGUpLm9mZnNldCgpLnRvcFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJChlbGUpLm9mZnNldCgpLnRvcFxuICAgICAgICB9LCBzcGVlZCk7XG4gICAgfVxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLSBJbWFnZSAvIGNzcyBhc3NldHMgLS0tLS0tLS0tLS0tXG5cbnJlcXVpcmUuY29udGV4dCgnLi9hc3NldHMvJywgdHJ1ZSwgL1xcLihzdmd8cG5nfGpwZT9nKSQvKTtcbnJlcXVpcmUoJy4vYXNzZXRzL3N0eWxlcy9tYWluLnNjc3MnKTtcblxuY29uc3QgaW5jbHVkZUNvbXBvbmVudCA9IChzY3JpcHQpID0+IHJlcXVpcmUoYC4vYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy8ke3NjcmlwdH0uanNgKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0gTGF6eSBsb2FkIC0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qXG4gKiBpbXBvcnQgTGF6eUltYWdlTG9hZGVyIGZyb20gJy4vYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9sYXp5aW1hZ2Vsb2FkZXIuanMnO1xuICogTGF6eUltYWdlTG9hZGVyLmluaXQoKTtcbiAqL1xuXG4vLyAtLS0tLS0tLS0tLSBDdXN0b20gc2NyaXB0cyAtLS0tLS0tLS0tLS0tLS1cbmluY2x1ZGVDb21wb25lbnQoJ3NsaWRlcicpO1xuaW5jbHVkZUNvbXBvbmVudCgnaGVhZGVyJyk7XG5pbmNsdWRlQ29tcG9uZW50KCdwb3N0c1NsaWRlcicpO1xuaW5jbHVkZUNvbXBvbmVudCgnbXVsdGlDb2xTbGlkZXInKTtcbmluY2x1ZGVDb21wb25lbnQoJ2ZlYXR1cmVTbGlkZXInKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZ3NhcDsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiLCJtb2R1bGUuZXhwb3J0cyA9IFN3aXBlcjsiXSwic291cmNlUm9vdCI6IiJ9