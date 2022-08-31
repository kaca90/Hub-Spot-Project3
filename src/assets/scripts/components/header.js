'use strict';

$(document).ready(function () {
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const hamburger = $('.header__hamburger');
    const headerClose = $('.sidebar__close');
    const sidebar = $('.sidebar');
    const sidebarContent = $('.sidebar__content');
    const itemWithChildren = $('.sidebar .hs-item-has-children');

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

    let backgroundColor = $('#background-color-hidden').val();
    let scrollPos = 0;
    $(document).scroll(function () {
        scrollPos = $(this).scrollTop();
        if (scrollPos > 100) {
            $('.header').css('background-color', backgroundColor);
        } else {
            $('.header').css('background-color', 'transparent');
        }
    });
});
