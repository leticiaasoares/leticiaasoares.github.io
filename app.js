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



const highlightMenu = () => { //faz o highlight na barra de navegação
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const sobreMenu = document.querySelector('#sobre-page');
    const motivoMenu = document.querySelector('#motivos-page');
    const expectativasMenu = document.querySelector('#expectativas-page')
    let scrollPos = window.scrollY;

    if(scrollPos < 600) { //highlight na introdução
        homeMenu.classList.add('highlight'); 
        sobreMenu.classList.remove('highlight');
        return
    } else if(scrollPos < 1400) { //highlight no sobre mim
        homeMenu.classList.remove('highlight');
        sobreMenu.classList.add('highlight');
        motivoMenu.classList.remove('highlight');
        return
    } else if(scrollPos < 2200) { //highlight no motivos
        sobreMenu.classList.remove('highlight');
        motivoMenu.classList.add('highlight');
        expectativasMenu.classList.remove('highlight');
        return
    } else if(scrollPos < 3400) { //highlight no expectativas
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



//logica para fazer a animação dos coracoezinhos

function pegaEstadoCoracao(coracao) { //olha se o coracao ja foi clicado
    if(localStorage.getItem(coracao)) {
        return localStorage.getItem(coracao);
    }
    else {
        return 'nao'; //se nao tiver dado no localstorage o coracao nao fica selecionado
    }
}

function ativaCoracaoIcon(coracaoIcon){ //faz a animação de de like e preenche
    coracaoIcon.classList.toggle('active');
}

function salvaCoracao(coracao, clicou) { //salva o estado do coracao no localstorage
    localStorage.setItem(coracao, clicou);
}

function alternaCoracao(coracao) { //alterna o estado, se for clicado de novo
    if(coracao == 'nao'){
        return 'sim';
    } else {
        return 'nao';
    }
}

let coracaoSobre = pegaEstadoCoracao('coracaoSobre');
let coracaoMotivos = pegaEstadoCoracao('coracaoMotivos');
let coracaoExpectativas = pegaEstadoCoracao('coracaoExpectativas');

const mensagemFinal = document.getElementById('mensagem__final');

let iconSobreCoracao = document.querySelector('.sobre__iconcoracao');
let iconMotivosCoracao = document.querySelector('.motivos__iconcoracao');
let iconExpectativasCoracao = document.querySelector('.expectativas__iconcoracao');

//primeiro verifica se o coracao ja estava clicado, para manter o icon ativado
if(coracaoSobre == 'sim') { 
    ativaCoracaoIcon(iconSobreCoracao);
}
if(coracaoMotivos == 'sim') {
    ativaCoracaoIcon(iconMotivosCoracao);
}
if(coracaoExpectativas == 'sim') {
    ativaCoracaoIcon(iconExpectativasCoracao);
}

//muda a mensagem final se todos os corações estiverem selecionados
if((coracaoSobre == 'sim') && (coracaoMotivos == 'sim') && (coracaoExpectativas == 'sim')){
    mensagemFinal.innerHTML = "obrigada por ler e gostar de todas as seções <3"
}else {
    mensagemFinal.innerHTML = "obrigada por ler :)"
}

iconSobreCoracao.onclick = function() { //ao clicar chama as funçoes
    coracaoSobre = alternaCoracao(coracaoSobre);
    salvaCoracao('coracaoSobre', coracaoSobre);
    ativaCoracaoIcon(iconSobreCoracao);
    //muda a mensagem final se todos os corações estiverem selecionados
    if((coracaoSobre == 'sim') && (coracaoMotivos == 'sim') && (coracaoExpectativas == 'sim')){
        mensagemFinal.innerHTML = "obrigada por ler e gostar de todas as seções <3"
    }else {
        mensagemFinal.innerHTML = "obrigada por ler :)"
    }
}

iconMotivosCoracao.onclick = function() {
    coracaoMotivos = alternaCoracao(coracaoMotivos);
    salvaCoracao('coracaoMotivos', coracaoMotivos);
    ativaCoracaoIcon(iconMotivosCoracao);
    if((coracaoSobre == 'sim') && (coracaoMotivos == 'sim') && (coracaoExpectativas == 'sim')){
        mensagemFinal.innerHTML = "obrigada por ler e gostar de todas as seções <3"
    }else {
        mensagemFinal.innerHTML = "obrigada por ler :)"
    }
}

iconExpectativasCoracao.onclick = function() {
    coracaoExpectativas = alternaCoracao(coracaoExpectativas);
    salvaCoracao('coracaoExpectativas', coracaoExpectativas);
    ativaCoracaoIcon(iconExpectativasCoracao);
    if((coracaoSobre == 'sim') && (coracaoMotivos == 'sim') && (coracaoExpectativas == 'sim')){
        mensagemFinal.innerHTML = "obrigada por ler e gostar de todas as seções <3"
    }else {
        mensagemFinal.innerHTML = "obrigada por ler :)"
    }
}