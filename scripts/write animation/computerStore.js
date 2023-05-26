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