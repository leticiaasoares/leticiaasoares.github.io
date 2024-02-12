//lógia para mudar o tema entre modo escuro e modo claro
function pegaTema() {
    if (localStorage.getItem('tema')) { //verifica se ja tem informação no localStorage 
        return localStorage.getItem('tema'); //usa o tema salvo no localStorage
    }
    else if (matchMedia('(prefers-color-scheme: dark)').matches) { //usa tema usado no browser
        return 'dark';
    }
    else if(matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';        
    } else {
        return 'light';
    }
}

function salvaTema(tema) { //salva tema usado pelo usuario no localStorage
    localStorage.setItem('tema', tema);
}

function aplicaTema(tema) { 
    document.documentElement.dataset.theme = tema; //muda o tema no site
    if(tema === 'light') { //muda o icon de sol ou lua
        botaoTema.checked = false;
        iconTema.setAttribute('name', 'sunny-outline');
    } else {
        botaoTema.checked = true;
        iconTema.setAttribute('name', 'moon-outline');
    }
}

function alternaTema(tema) { //logica usada para mudar tema pelo botão
    if(tema == 'light') {
        return 'dark';
    }
    return 'light';
}

let iconTema = document.querySelector('.iconmodo'); //icon de sol ou lua
const botaoTema = document.getElementById('theme-toggle'); //botao de slide

let tema = pegaTema(); //pega o tema que vai ser usado pela primeira vez
aplicaTema(tema); //aplica esse tema no site

botaoTema.onclick = () => { //muda o tema sempre que clicar no botao
    const temaNovo = alternaTema(tema);
    aplicaTema(temaNovo);
    salvaTema(temaNovo);
    tema = temaNovo;
}



const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const sobreMenu = document.querySelector('#sobre-page');
    const motivoMenu = document.querySelector('#motivos-page');
    const expectativasMenu = document.querySelector('#expectativas-page')
    let scrollPos = window.scrollY;

    if(scrollPos < 600) {
        homeMenu.classList.add('highlight');
        sobreMenu.classList.remove('highlight');
        return
    } else if(scrollPos < 1400) {
        homeMenu.classList.remove('highlight');
        sobreMenu.classList.add('highlight');
        motivoMenu.classList.remove('highlight');
        return
    } else if(scrollPos < 2200) {
        sobreMenu.classList.remove('highlight');
        motivoMenu.classList.add('highlight');
        expectativasMenu.classList.remove('highlight');
        return
    } else if(scrollPos < 3000) {
        sobreMenu.classList.remove('highlight');
        motivoMenu.classList.remove('highlight');
        expectativasMenu.classList.add('highlight');
        return
    }

    if ((scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);



let iconSobreCoracao = document.querySelector('.sobre__iconcoracao');
let iconMotivosCoracao = document.querySelector('.motivos__iconcoracao');
let iconExpectativasCoracao = document.querySelector('.expectativas__iconcoracao');
iconSobreCoracao.onclick = function() {
    iconSobreCoracao.classList.toggle('active');
}
iconMotivosCoracao.onclick = function() {
    iconMotivosCoracao.classList.toggle('active');
}
iconExpectativasCoracao.onclick = function() {
    iconExpectativasCoracao.classList.toggle('active');
}