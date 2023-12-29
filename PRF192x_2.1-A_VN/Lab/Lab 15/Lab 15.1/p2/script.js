'use strict';

const $ = (selector) => {
    return document.querySelector(selector);
}

const wait = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 2000)
    })
}

const hiddenElement = (element) => {
    element.classList.add('hidden');
}

const container = $('.images');

const createImage = async (imgPath) => {
    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', imgPath);
    return imgEl;
}
var start = performance.now();
createImage('./img/img-1.jpg').then(async imgEl => {
    container.insertAdjacentElement("afterend", imgEl);
    await wait();
    hiddenElement(imgEl);
}).then(() => {
    return createImage('./img/img-2.jpg');
}).then(async (imgEl) => {
    container.insertAdjacentElement("afterend", imgEl);
    await wait();
    hiddenElement(imgEl);
}).catch(error => {
    alert(error)
}).finally(() => {
    var duration = performance.now() - start;
    console.log(duration)
})


