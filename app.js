/*Loading animation*/
/*setTimeout(() => {
    document.querySelector('.main').style.display = 'block';
    document.querySelector('.animate').style.display = 'none';
}, 1000)*/

/*Loadnig Elements Animation*/
const animate = (element, position) => {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > position) {
          //przewinął
          element.classList.add('active');
        }
      });
}


/*const AnimateElement1 = document.getElementById('info');
const ScrollElement1 = document.getElementById('aboutBlock');
const elementPosition1 = ScrollElement1.getBoundingClientRect().top + window.pageYOffset;

animate(AnimateElement1, elementPosition1)

const AnimateElement2 = document.getElementById('skils');
const ScrollElement2 = document.getElementById('info');
const elementPosition2 = ScrollElement2.getBoundingClientRect().top + window.pageYOffset;

animate(AnimateElement2, elementPosition2)

//Animate Img 1
const AnimateElement3 = document.getElementById('projects_imgOne');
const ScrollElement3 = document.getElementById('infoProjects');
const elementPosition3 = ScrollElement3.getBoundingClientRect().top + window.pageYOffset;

animate(AnimateElement3, elementPosition3)

//Animate Describe 1
const AnimateElement4 = document.getElementById('projectsContentOne');
const ScrollElement4 = document.getElementById('projects_imgOne');
const elementPosition4 = ScrollElement4.getBoundingClientRect().top + window.pageYOffset;

animate(AnimateElement4, elementPosition4)

//Animate Img 2
const AnimateElement5 = document.getElementById('projects_imgTwo');
const ScrollElement5 = document.getElementById('projectsContentOne');
const elementPosition5 = ScrollElement5.getBoundingClientRect().top + window.pageYOffset;

animate(AnimateElement5, elementPosition5)

//Animate Describe 2
const AnimateElement6 = document.getElementById('projectsContentTwo');
const ScrollElement6 = document.getElementById('projects_imgTwo');
const elementPosition6 = ScrollElement6.getBoundingClientRect().top + window.pageYOffset;

//Animate Img 3
animate(AnimateElement6, elementPosition6)

const AnimateElement7 = document.getElementById('projects_imgThree');
const ScrollElement7 = document.getElementById('projectsContentTwo');
const elementPosition7 = ScrollElement7.getBoundingClientRect().top + window.pageYOffset;

animate(AnimateElement7, elementPosition7)

//Animate Describe 3
const AnimateElement8 = document.getElementById('projectsContentThree');
const ScrollElement8 = document.getElementById('projects_imgThree');
const elementPosition8 = ScrollElement8.getBoundingClientRect().top + window.pageYOffset;

animate(AnimateElement8, elementPosition8)

//Formulage Animation
*/
//delay scroll
function scroll(e) {
    const href = $(this).attr('href');
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 800);

    location.hash = href;
};

$('a[href*="#"]').click(scroll);


//Hamburger Menu

$(document).ready(function() {
  let isMenuOpen = false;
  $('.hamburger').click(function() {
      if (isMenuOpen) {
          $('.header').css('height', '');
          $('.menu').hide('slow');
          isMenuOpen = false;
      } else {
          $('.menu').show('slow');
          isMenuOpen = true;
      }
  });
});

  

//form remove content in input 

const sendButton = document.querySelector('#Sub');
const InputAll = document.querySelector('.contact__form-input');


sendButton.addEventListener('click', () => {
    InputAll.value == '';
})