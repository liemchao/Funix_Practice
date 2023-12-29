'use strict';

const $ = (selector) => {
    return document.querySelector(selector);
}

const person = {
    name: 'tung',
    getName: function () {
        return this.name
    },

    // getName(dsa) {
    //     console.log("Tung")
    // }
};

console.log(person.getName())
person.getName();
console.log("asd")
const container = $('.images');

const createImage = async (imgPath) => {
    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', imgPath);
    return imgEl;
}

createImage('./img/img-1.jpg')
    .then(imgEl => {
        container.insertAdjacentElement("afterend", imgEl);
    })
    .catch(error => {
        alert(error)
    })
// const imgElemenet = createImage('./img/img-1.jpg').json();
// console.log(imgElemenet)
