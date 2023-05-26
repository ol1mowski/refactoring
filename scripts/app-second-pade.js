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
