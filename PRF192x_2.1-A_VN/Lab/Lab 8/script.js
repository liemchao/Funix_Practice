'use strict';
const $ = (cssSelector) => {
    return document.querySelector(cssSelector);
}

const $$ = (cssSelector) => {
    return document.querySelectorAll(cssSelector);
}

const toggleClass = (element, classForToggle) => {
    element.classList.toggle(classForToggle);
}

/**
    check class have in element
    -> Return true if has class
    -> Return false if don't have class
**/
const checkClass = (element, classForCheck) => {
    return element.classList.contains(classForCheck);
}

/**
    add class to element
**/
const addClass = (element, classForAdd) => {
    element.classList.add(classForAdd);
}

const showModalButtons = $$('.show-modal');
const modal = $('.modal');
const overlay = $('.overlay');
const closeModalButton = $('.close-modal');

const showModalButtonEvents = () => {
    showModalButtons.forEach(element => {
        element.addEventListener('click', function () {
            toggleClass(modal, 'hidden');
            toggleClass(overlay, 'hidden');
        })
    });
}

const closeModalButtonEvents = () => {
    closeModalButton.addEventListener('click', function () {
        toggleClass(modal, 'hidden');
        toggleClass(overlay, 'hidden');
    });
}

const eventKeyBoardEsc = () => {
    document.addEventListener("keydown", function (e) {
        if (e.key === 'Escape' && !checkClass(modal, 'hidden')) {
            addClass(modal, 'hidden');
            addClass(overlay, 'hidden');
        }
    })
}

const init = () => {
    showModalButtonEvents();
    closeModalButtonEvents();
    eventKeyBoardEsc();
}

init();
