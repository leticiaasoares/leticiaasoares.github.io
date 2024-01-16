const menuLinks = document.querySelector('.barraNav__menu');
const navLogo = document.querySelector('barraNav__logo');

const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const motivoMenu = document.querySelector('#motivo-page');
    const expectativasMenu = document.querySelector('#expectativas-page');
    let scrollPos = window.scrollY;

    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        motivoMenu.classList.remove('highlight');
        return
    } else if(window.innerWidth > 960 && scrollPos < 1400) {
        homeMenu.classList.remove('highlight');
        motivoMenu.classList.add('highlight');
        expectativasMenu.classList.remove('highlight');
        return
    } else if(window.innerWidth > 960 && scrollPos < 2345) {
        motivoMenu.classList.remove('highlight');
        expectativasMenu.classList.add('highlight');
        return
    }

    if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

let icon = document.querySelector('ion-icon');
icon.onclick = function(){
  icon.classList.toggle('active');
}