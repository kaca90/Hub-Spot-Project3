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
      feature: {
        instance: null,
        init: false
      }
    }; // --------  FEATURE SLIDER --------

    var featureSlider = $('.features__slider');

    function setupFeatureSlider() {
      swiperInstances.feature.instance = new swiper__WEBPACK_IMPORTED_MODULE_0___default.a(featureSlider[0], {
        // eslint-disable-line
        slidesPerView: 'auto',
        spaceBetween: 30,
        freeMode: false,
        breakpoints: {
          991: {
            slidesPerView: 1,
            spaceBetween: $(featureSlider).attr('data-type') === 'slider' ? 40 : 72
          }
        } // centeredSlides: true,
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

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
    // const sliderMomentumRatio = 0.455;
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
            spaceBetween: 24
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
    // const sliderMomentumRatio = 0.455;
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
            slidesPerView: 'auto',
            spaceBetween: 24
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
            slidesPerView: 'auto',
            spaceBetween: 24
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
            slidesPerView: 'auto',
            spaceBetween: 24
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cyBzeW5jIFxcLihzdmd8cG5nfGpwZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zdmcvbmV3c2xldHRlci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMgc3luYyBeXFwuXFwvLipcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvZmVhdHVyZVNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9sYXp5aW1hZ2Vsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbXVsdGlDb2xTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvcG9zdHNTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvcmVzb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3NhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlN3aXBlclwiIl0sIm5hbWVzIjpbIlN3aXBlciIsIiQiLCJJc0luaXRpYWxpemVkIiwiZWxlIiwiaGFzQ2xhc3MiLCJzd2lwZXJJbnN0YW5jZXMiLCJmZWF0dXJlIiwiaW5zdGFuY2UiLCJpbml0IiwiZmVhdHVyZVNsaWRlciIsInNldHVwRmVhdHVyZVNsaWRlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJmcmVlTW9kZSIsImJyZWFrcG9pbnRzIiwiYXR0ciIsImxlbmd0aCIsImRvY3VtZW50IiwicmVhZHkiLCJoZWFkZXIiLCJxdWVyeVNlbGVjdG9yIiwibWFpbiIsImhhbWJ1cmdlciIsImhlYWRlckNsb3NlIiwic2lkZWJhciIsInNpZGViYXJDb250ZW50IiwiaXRlbVdpdGhDaGlsZHJlbiIsInN0eWxlIiwicGFkZGluZ1RvcCIsIm9mZnNldEhlaWdodCIsImNsaWNrIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b2dnbGVDbGFzcyIsImJhY2tncm91bmRDb2xvciIsInZhbCIsInNjcm9sbFBvcyIsInNjcm9sbCIsInNjcm9sbFRvcCIsImNzcyIsImRvSW1hZ2VQcmVsb2FkIiwidXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpbWFnZSIsIkltYWdlIiwic3Jjc2V0Iiwib25sb2FkIiwib25lcnJvciIsImNsYW1wIiwidmFsdWUiLCJtaW4iLCJtYXgiLCJNYXRoIiwiYXNzZXJ0IiwicHJlZGljYXRlIiwibWVzc2FnZSIsIkVycm9yIiwiTGF6eUltYWdlTG9hZGVyIiwiaW1hZ2VzIiwicXVlcnlTZWxlY3RvckFsbCIsIlBFTkRJTkdfQ0xBU1MiLCJjb25maWciLCJyb290Iiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsIlRIUkVTSE9MRCIsIk9CU0VSVkVSX1NVUFBPUlRFRCIsImxsTG9hZEltYWdlc0RlZmF1bHQiLCJsbENvdW50IiwibGxJbnRlcnNlY3RlZCIsImJpbmQiLCJsbE9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJmb3JFYWNoIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJIQU5ETEVEX0NMQVNTIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJlbnRyaWVzIiwiZW50cnkiLCJpbnRlcnNlY3Rpb25SYXRpbyIsImlzSW50ZXJzZWN0aW5nIiwibGxQcmVsb2FkSW1hZ2UiLCJ0YXJnZXQiLCJ1bm9ic2VydmUiLCJzcmMiLCJkYXRhc2V0IiwiSGVscGVycyIsInRoZW4iLCJsbFRhZ0ltYWdlIiwiQXJyYXkiLCJmcm9tIiwiaW1nIiwiZWwiLCJuZXdJbWciLCJhZGQiLCJMT0FERURfQ0xBU1MiLCJSRVZFQUxfQ0xBU1MiLCJhbHQiLCJhcHBlbmRDaGlsZCIsInJlbW92ZSIsIndpbmRvdyIsImxsSW5zdGFuY2UiLCJsbERpc2Nvbm5lY3QiLCJtdWx0aUNvbCIsIm11bHRpQ29sU2xpZGVyIiwic2V0dXBNdWx0aUNvbFNsaWRlciIsImVsZW1lbnQiLCJwb3N0cyIsImdyaWQiLCJwb3N0c1NsaWRlciIsInNldHVwUG9zdHNTbGlkZXIiLCJncmlkU2xpZGVyIiwic2V0dXBHcmlkU2xpZGVyIiwiZ3NhcCIsInJlc291cmNlIiwic29jaWFsUHJvb2YiLCJzb2NpYWxTbGlkZXIiLCJzZXR1cFNvY2lhbFNsaWRlciIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0IiwiY29udGV4dCIsImFyZ3MiLCJhcmd1bWVudHMiLCJsYXRlciIsImFwcGx5IiwiY2FsbE5vdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwid2FybiIsInRocm90dGxlIiwibGltaXQiLCJsYXN0RnVuYyIsImxhc3RSYW4iLCJEYXRlIiwibm93IiwibGVycCIsInN0YXJ0IiwiZW5kIiwiYW10IiwiaXJhbmRvbSIsImZsb29yIiwicmFuZG9tIiwic2Vjb25kcyIsIm1zIiwibWVkaWFRdWVyeSIsInF1ZXJ5IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJzdGJTY3JvbGxUbyIsInNwZWVkIiwicmVnaXN0ZXJQbHVnaW4iLCJTY3JvbGxUb1BsdWdpbiIsInRvIiwiZHVyYXRpb24iLCJlYXNlIiwic2Nyb2xsVG8iLCJ5Iiwib2Zmc2V0IiwidG9wIiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keSIsImFuaW1hdGUiLCJyZXF1aXJlIiwiaW5jbHVkZUNvbXBvbmVudCIsInNjcmlwdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFOzs7Ozs7Ozs7OztBQ3RCQSxnRDs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Ozs7Ozs7O0FDQUEsd0I7Ozs7Ozs7Ozs7O0FDQUEsd0IiLCJmaWxlIjoiYXNzZXRzL2pzL21haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2ltYWdlcy9zdmcvbmV3c2xldHRlci5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3N2Zy9uZXdzbGV0dGVyLnN2Z1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMgc3luYyByZWN1cnNpdmUgXFxcXC4oc3ZnfHBuZ3xqcGU/ZykkXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uL2ltYWdlcy9zdmcvbmV3c2xldHRlci5zdmdcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vZmVhdHVyZVNsaWRlci5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvZmVhdHVyZVNsaWRlci5qc1wiLFxuXHRcIi4vaGVhZGVyLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9oZWFkZXIuanNcIixcblx0XCIuL2hlbHBlcnMuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2hlbHBlcnMuanNcIixcblx0XCIuL2xhenlpbWFnZWxvYWRlci5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbGF6eWltYWdlbG9hZGVyLmpzXCIsXG5cdFwiLi9tdWx0aUNvbFNsaWRlci5qc1wiOiBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvbXVsdGlDb2xTbGlkZXIuanNcIixcblx0XCIuL3Bvc3RzU2xpZGVyLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9wb3N0c1NsaWRlci5qc1wiLFxuXHRcIi4vcmVzb3VyY2UuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3Jlc291cmNlLmpzXCIsXG5cdFwiLi9zbGlkZXIuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3NsaWRlci5qc1wiLFxuXHRcIi4vdXRpbHMuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3V0aWxzLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwuanMkXCI7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xyXG4vLyBpbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcclxuLy8gaW1wb3J0IHsgZGVib3VuY2UsbWVkaWFRdWVyeSB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuaWYgKFN3aXBlcikge1xyXG4gICAgJChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gLS0tLSBBTEwgU0xJREVSUyAtLS0tLVxyXG4gICAgICAgIC8vIGNvbnN0IHNsaWRlck1vbWVudHVtUmF0aW8gPSAwLjQ1NTtcclxuICAgICAgICBjb25zdCBJc0luaXRpYWxpemVkID0gKGVsZSkgPT4gZWxlLmhhc0NsYXNzKCdzd2lwZXItY29udGFpbmVyLWluaXRpYWxpemVkJyk7XHJcbiAgICAgICAgY29uc3Qgc3dpcGVySW5zdGFuY2VzID0ge1xyXG4gICAgICAgICAgICBmZWF0dXJlOiAgICAgICAgICAgICAgeyBpbnN0YW5jZTogbnVsbCwgaW5pdDogZmFsc2UgfSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLSAgRkVBVFVSRSBTTElERVIgLS0tLS0tLS1cclxuXHJcbiAgICAgICAgY29uc3QgZmVhdHVyZVNsaWRlciA9ICQoJy5mZWF0dXJlc19fc2xpZGVyJyk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldHVwRmVhdHVyZVNsaWRlciAoKSB7XHJcbiAgICAgICAgICAgIHN3aXBlckluc3RhbmNlcy5mZWF0dXJlLmluc3RhbmNlID0gbmV3IFN3aXBlcihmZWF0dXJlU2xpZGVyWzBdLCB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgICAgICAgICBmcmVlTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgIDk5MToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46ICQoZmVhdHVyZVNsaWRlcikuYXR0cignZGF0YS10eXBlJykgPT09ICdzbGlkZXInID8gNDAgOiA3MixcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZlYXR1cmVTbGlkZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoIUlzSW5pdGlhbGl6ZWQoZmVhdHVyZVNsaWRlcikpIHtcclxuICAgICAgICAgICAgICAgIHNldHVwRmVhdHVyZVNsaWRlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG4gICAgY29uc3QgaGFtYnVyZ2VyID0gJCgnLmhlYWRlcl9faGFtYnVyZ2VyJyk7XHJcbiAgICBjb25zdCBoZWFkZXJDbG9zZSA9ICQoJy5zaWRlYmFyX19jbG9zZScpO1xyXG4gICAgY29uc3Qgc2lkZWJhciA9ICQoJy5zaWRlYmFyJyk7XHJcbiAgICBjb25zdCBzaWRlYmFyQ29udGVudCA9ICQoJy5zaWRlYmFyX19jb250ZW50Jyk7XHJcbiAgICBjb25zdCBpdGVtV2l0aENoaWxkcmVuID0gJCgnLnNpZGViYXIgLmhzLWl0ZW0taGFzLWNoaWxkcmVuJyk7XHJcblxyXG4gICAgaWYgKGhlYWRlciAmJiBtYWluKSB7XHJcbiAgICAgICAgbWFpbi5zdHlsZS5wYWRkaW5nVG9wID0gaGVhZGVyLm9mZnNldEhlaWdodCArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhhbWJ1cmdlci5sZW5ndGggJiYgaGVhZGVyQ2xvc2UubGVuZ3RoICYmIHNpZGViYXIubGVuZ3RoKSB7XHJcbiAgICAgICAgJChoYW1idXJnZXIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChzaWRlYmFyKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoaGVhZGVyQ2xvc2UpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChzaWRlYmFyKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoc2lkZWJhcikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChzaWRlYmFyQ29udGVudCkuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXRlbVdpdGhDaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgJChpdGVtV2l0aENoaWxkcmVuKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYmFja2dyb3VuZENvbG9yID0gJCgnI2JhY2tncm91bmQtY29sb3ItaGlkZGVuJykudmFsKCk7XHJcbiAgICBsZXQgc2Nyb2xsUG9zID0gMDtcclxuICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2Nyb2xsUG9zID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuICAgICAgICBpZiAoc2Nyb2xsUG9zID4gMTAwKSB7XHJcbiAgICAgICAgICAgICQoJy5oZWFkZXInKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCBiYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJy5oZWFkZXInKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAndHJhbnNwYXJlbnQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZG9JbWFnZVByZWxvYWQgPSB1cmwgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLnNyY3NldCA9IHVybDtcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gcmVzb2x2ZTtcbiAgICAgICAgaW1hZ2Uub25lcnJvciA9IHJlamVjdDtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGNsYW1wID0gKHZhbHVlLCBtaW4sIG1heCkgPT4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbHVlKSk7XG5cbmNvbnN0IGFzc2VydCA9IChwcmVkaWNhdGUsIG1lc3NhZ2UpID0+IHtcbiAgICBpZiAocHJlZGljYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgYXNzZXJ0LCBjbGFtcCwgZG9JbWFnZVByZWxvYWRcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBIZWxwZXJzIGZyb20gJy4vaGVscGVycyc7XG5cbmNsYXNzIExhenlJbWFnZUxvYWRlciB7XG4gICAgc3RhdGljIGdldCBPQlNFUlZFUl9TVVBQT1JURUQgKCkge1xuICAgICAgICByZXR1cm4gKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFBFTkRJTkdfQ0xBU1MgKCkge1xuICAgICAgICByZXR1cm4gJ2xhenktaW1hZ2UtLXBlbmRpbmcnO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgSEFORExFRF9DTEFTUyAoKSB7XG4gICAgICAgIHJldHVybiAnbGF6eS1pbWFnZS0tbG9hZGVkJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IExPQURFRF9DTEFTUyAoKSB7XG4gICAgICAgIHJldHVybiAnbGF6eS1pbWFnZV9fYWN0dWFsJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFJFVkVBTF9DTEFTUyAoKSB7XG4gICAgICAgIHJldHVybiAnZmFkZS1pbic7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBUSFJFU0hPTEQgKCkge1xuICAgICAgICByZXR1cm4gMC4xO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbml0ICgpIHtcbiAgICAgICAgaWYgKHRoaXMubGxJbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5sbEluc3RhbmNlLmxsRGlzY29ubmVjdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sbENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5sbEluc3RhbmNlID0gbmV3IExhenlJbWFnZUxvYWRlcigpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdmFyIGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke0xhenlJbWFnZUxvYWRlci5QRU5ESU5HX0NMQVNTfWApO1xuICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgICAgcm9vdE1hcmdpbjogJzYwcHggMHB4JyxcbiAgICAgICAgICAgIHRocmVzaG9sZDogTGF6eUltYWdlTG9hZGVyLlRIUkVTSE9MRFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghTGF6eUltYWdlTG9hZGVyLk9CU0VSVkVSX1NVUFBPUlRFRCkge1xuICAgICAgICAgICAgdGhpcy5sbExvYWRJbWFnZXNEZWZhdWx0KGltYWdlcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxsQ291bnQgPSBpbWFnZXMubGVuZ3RoO1xuICAgICAgICB0aGlzLmxsSW50ZXJzZWN0ZWQgPSB0aGlzLmxsSW50ZXJzZWN0ZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5sbE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKHRoaXMubGxJbnRlcnNlY3RlZCwgY29uZmlnKTtcblxuICAgICAgICBpbWFnZXMuZm9yRWFjaChpbWFnZSA9PiB7XG4gICAgICAgICAgICBpZiAoaW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKExhenlJbWFnZUxvYWRlci5IQU5ETEVEX0NMQVNTKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5sbE9ic2VydmVyLm9ic2VydmUoaW1hZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsbERpc2Nvbm5lY3QgKCkge1xuICAgICAgICBpZiAoIXRoaXMubGxPYnNlcnZlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sbE9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbiAgICBsbEludGVyc2VjdGVkIChlbnRyaWVzKSB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGlmIChlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA8IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxsQ291bnQtLTtcbiAgICAgICAgICAgICAgICB0aGlzLmxsUHJlbG9hZEltYWdlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sbE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5sbENvdW50ID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sbE9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG5cbiAgICBsbFByZWxvYWRJbWFnZSAoaW1hZ2UpIHtcbiAgICAgICAgY29uc3Qgc3JjID0gaW1hZ2UuZGF0YXNldC5zcmNzZXQ7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gSGVscGVycy5kb0ltYWdlUHJlbG9hZChzcmMpLnRoZW4oKCkgPT4gdGhpcy5sbFRhZ0ltYWdlKGltYWdlLCBzcmMpKTtcbiAgICB9XG5cbiAgICBsbExvYWRJbWFnZXNEZWZhdWx0IChpbWFnZXMpIHtcbiAgICAgICAgQXJyYXkuZnJvbShpbWFnZXMpLmZvckVhY2goaW1hZ2UgPT4gdGhpcy5sbFByZWxvYWRJbWFnZShpbWFnZSkpO1xuICAgIH1cblxuICAgIGxsVGFnSW1hZ2UgKGltZywgc3JjKSB7XG4gICAgICAgIGNvbnN0IGVsID0gaW1nLnF1ZXJ5U2VsZWN0b3IoJy5sYXp5LWltYWdlX19jb250ZW50Jyk7XG4gICAgICAgIGlmICghZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaW1nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV3SW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG5ld0ltZy5jbGFzc0xpc3QuYWRkKExhenlJbWFnZUxvYWRlci5MT0FERURfQ0xBU1MpO1xuICAgICAgICBuZXdJbWcuc3Jjc2V0ID0gc3JjO1xuICAgICAgICBuZXdJbWcuY2xhc3NMaXN0LmFkZChMYXp5SW1hZ2VMb2FkZXIuUkVWRUFMX0NMQVNTKTtcbiAgICAgICAgbmV3SW1nLmFsdCA9IGVsLmFsdDtcbiAgICAgICAgaW1nLmFwcGVuZENoaWxkKG5ld0ltZyk7XG5cbiAgICAgICAgaW1nLmRhdGFzZXQuc3Jjc2V0ID0gJyc7XG4gICAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKExhenlJbWFnZUxvYWRlci5QRU5ESU5HX0NMQVNTKTtcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoTGF6eUltYWdlTG9hZGVyLkhBTkRMRURfQ0xBU1MpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF6eUltYWdlTG9hZGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xyXG4vLyBpbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcclxuLy8gaW1wb3J0IHsgZGVib3VuY2UsbWVkaWFRdWVyeSB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuaWYgKFN3aXBlcikge1xyXG4gICAgJChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gLS0tLSBBTEwgU0xJREVSUyAtLS0tLVxyXG4gICAgICAgIC8vIGNvbnN0IHNsaWRlck1vbWVudHVtUmF0aW8gPSAwLjQ1NTtcclxuICAgICAgICBjb25zdCBJc0luaXRpYWxpemVkID0gKGVsZSkgPT4gZWxlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci1pbml0aWFsaXplZCcpO1xyXG4gICAgICAgIGNvbnN0IHN3aXBlckluc3RhbmNlcyA9IHtcclxuICAgICAgICAgICAgbXVsdGlDb2w6ICAgICAgICAgICAgICB7IGluc3RhbmNlOiBudWxsLCBpbml0OiBmYWxzZSB9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tIG11bHRpQ29sIFNMSURFUiAtLS0tLS0tLVxyXG5cclxuICAgICAgICBjb25zdCBtdWx0aUNvbFNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tdWx0aS1jb2x1bW5fX3NsaWRlcicpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXR1cE11bHRpQ29sU2xpZGVyICgpIHtcclxuICAgICAgICAgICAgbXVsdGlDb2xTbGlkZXIuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghSXNJbml0aWFsaXplZChlbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXBlckluc3RhbmNlcy5tdWx0aUNvbC5pbnN0YW5jZSA9IG5ldyBTd2lwZXIoZWxlbWVudCwgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyNCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobXVsdGlDb2xTbGlkZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBpZiAoIUlzSW5pdGlhbGl6ZWQobXVsdGlDb2xTbGlkZXIpKSB7XHJcbiAgICAgICAgICAgIHNldHVwTXVsdGlDb2xTbGlkZXIoKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcclxuLy8gaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XHJcbi8vIGltcG9ydCB7IGRlYm91bmNlLG1lZGlhUXVlcnkgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbmlmIChTd2lwZXIpIHtcclxuICAgICQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIC0tLS0gQUxMIFNMSURFUlMgLS0tLS1cclxuICAgICAgICAvLyBjb25zdCBzbGlkZXJNb21lbnR1bVJhdGlvID0gMC40NTU7XHJcbiAgICAgICAgY29uc3QgSXNJbml0aWFsaXplZCA9IChlbGUpID0+IGVsZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItaW5pdGlhbGl6ZWQnKTtcclxuICAgICAgICBjb25zdCBzd2lwZXJJbnN0YW5jZXMgPSB7XHJcbiAgICAgICAgICAgIHBvc3RzOiAgeyBpbnN0YW5jZTogbnVsbCwgaW5pdDogZmFsc2UgfSxcclxuICAgICAgICAgICAgZ3JpZDogICB7IGluc3RhbmNlOiBudWxsLCBpbml0OiBmYWxzZSB9LFxyXG4gICAgICAgICAgICBmZWF0dXJlOiB7IGluc3RhbmNlOiBudWxsLCBpbml0OiBmYWxzZSB9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tIFBPU1RTIFNMSURFUiAtLS0tLS0tLVxyXG5cclxuICAgICAgICBjb25zdCBwb3N0c1NsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9nLXBvc3RzX19wb3N0cy1zbGlkZXInKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0dXBQb3N0c1NsaWRlciAoKSB7XHJcbiAgICAgICAgICAgIHBvc3RzU2xpZGVyLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUlzSW5pdGlhbGl6ZWQoZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2lwZXJJbnN0YW5jZXMucG9zdHMuaW5zdGFuY2UgPSBuZXcgU3dpcGVyKGVsZW1lbnQsIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBvc3RzU2xpZGVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgLy8gaWYgKCFJc0luaXRpYWxpemVkKHBvc3RzU2xpZGVyKSkge1xyXG4gICAgICAgICAgICBzZXR1cFBvc3RzU2xpZGVyKCk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIC0tLSBHUklEIFNMSURFUiAtLS0tXHJcbiAgICAgICAgY29uc3QgZ3JpZFNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9nLXBvc3RzX19ncmlkLXNsaWRlcicpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXR1cEdyaWRTbGlkZXIgKCkge1xyXG4gICAgICAgICAgICBncmlkU2xpZGVyLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUlzSW5pdGlhbGl6ZWQoZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2lwZXJJbnN0YW5jZXMucG9zdHMuaW5zdGFuY2UgPSBuZXcgU3dpcGVyKGVsZW1lbnQsIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGdyaWRTbGlkZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBpZiAoIUlzSW5pdGlhbGl6ZWQocG9zdHNTbGlkZXIpKSB7XHJcbiAgICAgICAgICAgIHNldHVwR3JpZFNsaWRlcigpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAtLS0gR1JJRCBTTElERVIgLS0tLVxyXG4gICAgICAgIGNvbnN0IGZlYXR1cmVTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmxvZy1wb3N0c19fZ3JpZC1mZWF0dXJlLXNsaWRlcicpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXR1cEZlYXR1cmVTbGlkZXIgKCkge1xyXG4gICAgICAgICAgICBmZWF0dXJlU2xpZGVyLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUlzSW5pdGlhbGl6ZWQoZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2lwZXJJbnN0YW5jZXMucG9zdHMuaW5zdGFuY2UgPSBuZXcgU3dpcGVyKGVsZW1lbnQsIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZlYXR1cmVTbGlkZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBpZiAoIUlzSW5pdGlhbGl6ZWQocG9zdHNTbGlkZXIpKSB7XHJcbiAgICAgICAgICAgIHNldHVwRmVhdHVyZVNsaWRlcigpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcblxuaWYgKGdzYXApIHtcbiAgICAkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSAkKCcucmVzb3VyY2UnKTtcbiAgICAgICAgLy8gbGV0IHN3YXAgPSBmYWxzZTtcblxuICAgICAgICBpZiAocmVzb3VyY2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gY29uc3QgY2hhbmdlQ2xhc3NlcyA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBsZXQgcmVkID0gJCgnLnJlc291cmNlX19ibG9jay1yZWQnKVswXTtcbiAgICAgICAgICAgIC8vICAgICBsZXQgYmxhY2sgPSAkKCcucmVzb3VyY2VfX2Jsb2NrLWJsYWNrJylbMF07XG5cbiAgICAgICAgICAgIC8vICAgICBpZiAoIXN3YXApIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgcmVkLmNsYXNzTGlzdC5hZGQoJ3N3YXAnKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgYmxhY2suY2xhc3NMaXN0LmFkZCgnc3dhcCcpO1xuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHJlZC5jbGFzc0xpc3QucmVtb3ZlKCdzd2FwJyk7XG4gICAgICAgICAgICAvLyAgICAgICAgIGJsYWNrLmNsYXNzTGlzdC5yZW1vdmUoJ3N3YXAnKTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgc3dhcCA9ICFzd2FwO1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAvLyBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICAgICAgICAvLyAgICAgdGFyZ2V0OiAnLnJlc291cmNlX19ibG9jaycsXG4gICAgICAgICAgICAvLyAgICAgc3RhcnQ6ICd0b3AgdG9wJyxcbiAgICAgICAgICAgIC8vICAgICBtYXJrZXJzOiB0cnVlLFxuICAgICAgICAgICAgLy8gICAgIC8vIGVuZDogZG9jdW1lbnQuaW5uZXJIZWlnaHQsXG4gICAgICAgICAgICAvLyAgICAgb25Ub2dnbGU6ICgpID0+IGNoYW5nZUNsYXNzZXMoKSxcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcbi8vIGltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xuLy8gaW1wb3J0IHsgZGVib3VuY2UsbWVkaWFRdWVyeSB9IGZyb20gJy4vdXRpbHMnO1xuXG5pZiAoU3dpcGVyKSB7XG4gICAgJChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIC0tLS0gQUxMIFNMSURFUlMgLS0tLS1cbiAgICAgICAgLy8gY29uc3Qgc2xpZGVyTW9tZW50dW1SYXRpbyA9IDAuNDU1O1xuICAgICAgICBjb25zdCBJc0luaXRpYWxpemVkID0gKGVsZSkgPT4gZWxlLmhhc0NsYXNzKCdzd2lwZXItY29udGFpbmVyLWluaXRpYWxpemVkJyk7XG4gICAgICAgIGNvbnN0IHN3aXBlckluc3RhbmNlcyA9IHtcbiAgICAgICAgICAgIHNvY2lhbFByb29mOiAgICAgICAgICAgICAgeyBpbnN0YW5jZTogbnVsbCwgaW5pdDogZmFsc2UgfSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyAtLS0tLS0tLSAgU09DSUFMIFBST09GIFNMSURFUiAtLS0tLS0tLVxuXG4gICAgICAgIGNvbnN0IHNvY2lhbFNsaWRlciA9ICQoJy5zb2NpYWwtcHJvb2ZfX3NsaWRlcicpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHNldHVwU29jaWFsU2xpZGVyICgpIHtcbiAgICAgICAgICAgIHN3aXBlckluc3RhbmNlcy5zb2NpYWxQcm9vZi5pbnN0YW5jZSA9IG5ldyBTd2lwZXIoc29jaWFsU2xpZGVyWzBdLCB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgICAgICAgICAgICBmcmVlTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgICAgICAgICAgOTkxOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA2LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAkKHNvY2lhbFNsaWRlcikuYXR0cignZGF0YS10eXBlJykgPT09ICdjaXJjbGUnID8gNDAgOiA3MixcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyBsb29wOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc29jaWFsU2xpZGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmICghSXNJbml0aWFsaXplZChzb2NpYWxTbGlkZXIpKSB7XG4gICAgICAgICAgICAgICAgc2V0dXBTb2NpYWxTbGlkZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcblxuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkgPT4ge1xuICAgIHZhciB0aW1lb3V0O1xuICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgdmFyIGxhdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgICAgICAgICAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdBIGZ1bmN0aW9uIGlzIHVuZGVmaW5lZCEgRGVib3VuY2UgbWlnaHQgbm90IHdvcmsgYXMgaW50ZW5kZWQ6ICcsIGZ1bmMpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCB0aHJvdHRsZSA9IChmdW5jLCBsaW1pdCkgPT4ge1xuICAgIGxldCBsYXN0RnVuYztcbiAgICBsZXQgbGFzdFJhbjtcblxuICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgICAgICAgICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcblxuICAgICAgICAgICAgaWYgKCFsYXN0UmFuKSB7XG4gICAgICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICBsYXN0UmFuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGxhc3RGdW5jKTtcblxuICAgICAgICAgICAgICAgIGxhc3RGdW5jID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoRGF0ZS5ub3coKSAtIGxhc3RSYW4pID49IGxpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFJhbiA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBsaW1pdCAtIChEYXRlLm5vdygpIC0gbGFzdFJhbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybignQSBmdW5jdGlvbiBpcyB1bmRlZmluZWQhIFRocm90dGxlIG1pZ2h0IG5vdCB3b3JrIGFzIGludGVuZGVkOiAnLCBmdW5jKTtcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgbGVycCA9IChzdGFydCwgZW5kLCBhbXQpID0+IHtcbiAgICByZXR1cm4gKDEgLSBhbXQpICogc3RhcnQgKyBhbXQgKiBlbmQ7XG59O1xuXG5leHBvcnQgY29uc3QgY2xhbXAgPSAobWluLCB2YWwsIG1heCkgPT4ge1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWwsIG1pbiksIG1heCk7XG59O1xuXG5leHBvcnQgY29uc3QgaXJhbmRvbSA9IChtYXgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IobWF4KSk7XG5leHBvcnQgY29uc3Qgc2Vjb25kcyA9IChtcykgPT4gbXMgKiAxMDAwO1xuXG5leHBvcnQgY29uc3QgbWVkaWFRdWVyeSA9IChxdWVyeSkgPT4gKHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KSkubWF0Y2hlcztcblxuZXhwb3J0IGNvbnN0IHN0YlNjcm9sbFRvID0gKGVsZSwgc3BlZWQgPSAyMDApID0+IHtcbiAgICBpZiAoZ3NhcCkge1xuICAgICAgICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRvUGx1Z2luKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgICAgIGdzYXAudG8od2luZG93LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogc3BlZWQgLyAxMDAwLFxuICAgICAgICAgICAgZWFzZTogJ1Bvd2VyMy5lYXNlT3V0JyxcbiAgICAgICAgICAgIHNjcm9sbFRvOiB7XG4gICAgICAgICAgICAgICAgeTogJChlbGUpLm9mZnNldCgpLnRvcFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogJChlbGUpLm9mZnNldCgpLnRvcFxuICAgICAgICB9LCBzcGVlZCk7XG4gICAgfVxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLSBJbWFnZSAvIGNzcyBhc3NldHMgLS0tLS0tLS0tLS0tXG5cbnJlcXVpcmUuY29udGV4dCgnLi9hc3NldHMvJywgdHJ1ZSwgL1xcLihzdmd8cG5nfGpwZT9nKSQvKTtcbnJlcXVpcmUoJy4vYXNzZXRzL3N0eWxlcy9tYWluLnNjc3MnKTtcblxuY29uc3QgaW5jbHVkZUNvbXBvbmVudCA9IChzY3JpcHQpID0+IHJlcXVpcmUoYC4vYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy8ke3NjcmlwdH0uanNgKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0gTGF6eSBsb2FkIC0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qXG4gKiBpbXBvcnQgTGF6eUltYWdlTG9hZGVyIGZyb20gJy4vYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9sYXp5aW1hZ2Vsb2FkZXIuanMnO1xuICogTGF6eUltYWdlTG9hZGVyLmluaXQoKTtcbiAqL1xuXG4vLyAtLS0tLS0tLS0tLSBDdXN0b20gc2NyaXB0cyAtLS0tLS0tLS0tLS0tLS1cbmluY2x1ZGVDb21wb25lbnQoJ3NsaWRlcicpO1xuaW5jbHVkZUNvbXBvbmVudCgnaGVhZGVyJyk7XG5pbmNsdWRlQ29tcG9uZW50KCdwb3N0c1NsaWRlcicpO1xuaW5jbHVkZUNvbXBvbmVudCgnbXVsdGlDb2xTbGlkZXInKTtcbmluY2x1ZGVDb21wb25lbnQoJ2ZlYXR1cmVTbGlkZXInKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZ3NhcDsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiLCJtb2R1bGUuZXhwb3J0cyA9IFN3aXBlcjsiXSwic291cmNlUm9vdCI6IiJ9