const elements = document.querySelectorAll('.menu__item');
elements[0].addEventListener('click', (e) => {
    e.preventDefault();
    window.location = '../index.html#home';
});
elements[1].addEventListener('click', (e) => {
    e.preventDefault();
    window.location = '../index.html#about';
});
elements[2].addEventListener('click', (e) => {
    e.preventDefault();
    window.location = '../index.html#projects';
});
elements[3].addEventListener('click', (e) => {
    e.preventDefault();
    window.location = '../index.html#contact';
});


const box1 = document.querySelector('.main-section__content__header__h2');
const text1 = "Webpage Computer store";
let worldIndex1 = 0;

let oldTime = 0;
const speed = 100;

const typing = (newTime) => {
    if (newTime - oldTime > speed) {
        oldTime = newTime;
        if (worldIndex1 < text1.length) {
            const letter = text1.substr(worldIndex1, 1);
            box1.textContent += letter;
            worldIndex1++;
        }
    }

    requestAnimationFrame(typing);
}

typing();