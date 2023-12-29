'use strict';

const $ = (selector) => {
    return document.querySelector(selector);
}

const imgPaths = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

const wait = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 2000)
    })
}

const addParallel = (element) => {
    element.classList.add('parallel');
}

const images = $('.images');

const createImage = async (imgPath) => {
    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', imgPath);
    return imgEl;
}

const loadNPause = async () => {
    const imgEl1 = await createImage('./img/img-1.jpg')
    container.insertAdjacentElement("afterend", imgEl1);
    await wait();
    hiddenElement(imgEl1);
    const imgEl2 = await createImage('./img/img-2.jpg')
    container.insertAdjacentElement("afterend", imgEl2);
    await wait();
    hiddenElement(imgEl2);

    // await createImage('./img/img-1.jpg').then(async imgEl => {
    //     container.insertAdjacentElement("afterend", imgEl);
    //     await wait();
    //     hiddenElement(imgEl);
    // }).then(() => {
    //     return createImage('./img/img-2.jpg');
    // }).then(async (imgEl) => {
    //     container.insertAdjacentElement("afterend", imgEl);
    //     await wait();
    //     hiddenElement(imgEl);
    // })
}

const loadAll = () => {
    const imgs = imgPaths.map((imgPath) => {
        return createImage(imgPath)
    })
    console.log(imgs)
    imgs.map((img) => {
        img.then((imgEl) => {
            images.appendChild(imgEl);
            return imgEl;
        }).then(imgEl => {
            addParallel(imgEl);
        })
    });
}

loadAll();
